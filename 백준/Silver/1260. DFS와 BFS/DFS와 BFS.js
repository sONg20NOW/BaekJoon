const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
let neighbor = Array.from(new Array(N + 1), (_) => []);
for (let i = 0; i < M; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number);
    neighbor[a].push(b);
    neighbor[b].push(a);
    // 정렬
    neighbor[a].sort((a, b) => a- b);
    neighbor[b].sort((a, b) => a- b);
}

let Q_DFS = [];
let DFS_checklist = new Set(Q_DFS);
let Q_BFS = [V];
let BFS_checklist = new Set(Q_BFS);
// DFS 시행
Dril(V);

function Dril(v) {
    if (DFS_checklist.has(v)) {
        return;
    }
    DFS_checklist.add(v);
    Q_DFS.push(v);
    for (let w of neighbor[v]) {
        Dril(w);
    }
}

console.log(Q_DFS.join(' '));

// BFS 시행

let head = 0;
while (head < Q_BFS.length) {
    const v = Q_BFS[head];

    for (let w of neighbor[v]) {

        if (BFS_checklist.has(w)) {
            continue;
        }
        
        BFS_checklist.add(w);
        Q_BFS.push(w);
    }
    head++;
}

console.log(Q_BFS.join(' '));