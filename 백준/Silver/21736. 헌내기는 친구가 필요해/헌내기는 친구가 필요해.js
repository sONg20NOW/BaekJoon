const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let center = [-1, -1]
let block = new Array(N);
for (let i = 0; i < N; i++) {
    const row = input[i + 1];
    block[i] = row;
    if (row.includes('I')) {
        center = [i, row.indexOf('I')];
    }
}

let person = 0;
let head = 0;
let queue = [center];
let checklist = new Set();
direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
while(head < queue.length ) {
    const node = queue[head++];
    const this_block = block[node[0]].charAt(node[1]);
    if (checklist.has(CtoString(node)))   continue;
    checklist.add(CtoString(node));
    if (this_block == 'P')  {
        person++;
    }
    for (let d of direction) {
        const next = [node[0] + d[0], node[1] + d[1]];
        if (next[0] >= N || next[1] >= M || next[0] < 0 || next[1] < 0)   continue;
        const next_block = block[next[0]].charAt(next[1]);
        if (next_block == 'X') continue;
        if (checklist.has(CtoString(next)))   continue;
        queue.push(next);
    }
}

console.log((person == 0) ? 'TT' : person)

function CtoString(C) {
    return `${C[0]}, ${C[1]}`
}