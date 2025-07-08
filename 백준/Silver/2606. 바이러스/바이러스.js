const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const t = parseInt(input[1]);

// i번 컴퓨터의 이웃 = neighbors[i - 1] = [1, 2, 3]
let neighbors = Array.from(new Array(100), (_) => new Array());

function Nbrs(num) {
    return neighbors[num - 1];
}

for (let i = 0; i < t; i++) {
    const [a, b] = input[i + 2].split(' ').map((v) => parseInt(v));
    Nbrs(a).push(b);
    Nbrs(b).push(a)
}

let affected = new Set();
let stack = [];

function Affect(n) {
    affected.add(n);
    for (let i of Nbrs(n)) {
        if (!affected.has(i)) {
            affected.add(i);
            stack.push(i);
        }
    }
}

Affect(1);

while(stack.length != 0){
    const next = stack.shift();
    Affect(next);
}

console.log(affected.size - 1);