const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const [N, K] = input[0].split(' ').map((v) => parseInt(v));
let answer = [];

// queue : 1 2 3 ... N
let queue = new Array(N).fill(0);
for (let i = 0; i < queue.length; i++) {
    queue[i] += i + 1;
}

let idx = 0;
while (queue.length) {
    idx = (idx + (K - 1)) % queue.length;
    answer.push(queue[idx]);
    queue.splice(idx, 1);
}

console.log('<' + answer.join(', ') + '>')