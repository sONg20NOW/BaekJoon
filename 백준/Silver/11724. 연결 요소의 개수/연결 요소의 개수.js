const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((v) => parseInt(v));
let neighbors = Array.from(new Array(N), (_) => new Array());

function Nbrs(node) {
    return neighbors[node - 1];
}

// 간선 관계 정리.
for (let i = 0; i < M; i++) {
    const [u, v] = input[i + 1].split(' ').map((value => parseInt(value)));
    neighbors[u - 1].push(v);
    neighbors[v - 1].push(u);
}

let checklist = new Array(N).fill(0).map((v, i) => i + 1);
let num_group = 0;

while (checklist.length != 0) {
    // checklist에서 target 노드 선정
    const target = checklist[0];
    let group = [target];
    
    while(group.length != 0) {
        let node = group.shift();
        // 살펴보지 않은 노드라면
        if (checklist.includes(node)) {
            for (let neighbor of Nbrs(node)) {
                if (checklist.includes(neighbor) && !group.includes(neighbor))
                    group.push(neighbor);
            }
            RemoveXfromArr(checklist, node);
        }
    }

    num_group++;
}

function RemoveXfromArr(arr, x) {
    const idx = arr.indexOf(x);
    
    return arr.splice(idx, 1);
}

console.log(num_group);