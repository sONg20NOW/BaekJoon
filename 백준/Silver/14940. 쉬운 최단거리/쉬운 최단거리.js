const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const land = Array.from(new Array(n), (_) => new Array(m));
const dist = Array.from(new Array(n), (_) => new Array(m).fill(-1));

for (let i = 0; i < n; i++) {
    const row = input[i + 1].split(' ').map(Number);
    land[i] = row;
}

let start_x, start_y;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (land[i][j] == 2) {
            dist[i][j] = 0;
            [start_x, start_y] = [i, j];
        }
        else if (land[i][j] == 0)   dist[i][j] = 0;
    }
}
let next_node = [[start_x, start_y]];
let head = 0;
let tail = 1;

while (head != tail) {
    const [x, y] = next_node[head++];
    Spread(x, y);
}



function Spread(i, j) {
    const direction = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    for (let dir of direction) {
        const [dx, dy] = dir;
        const [next_i, next_j] = [i + dx, j + dy];

        if ((next_i >= 0 && next_i < n) && (next_j >=0 && next_j < m) && dist[next_i][next_j] != 0 && dist[next_i][next_j] == -1) {
            dist[next_i][next_j] = dist[i][j] + 1;
            next_node[tail++] = [next_i, next_j];
        }
    }
}

let answer = [];
for (let row of dist) {
    answer.push(row.join(' '));
}

console.log(answer.join('\n'));