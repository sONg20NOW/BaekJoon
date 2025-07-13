const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
let A = [];
for (let i = 0; i < N; i++) {
    A.push(parseInt(input[i + 1]));
}

let sum = 0;
let mod = K;
for (let i = N - 1; i >= 0; i--) {
    if (A[i] > mod) continue;
    sum += Math.floor(mod / A[i]);
    mod = mod % A[i];
}

console.log(sum);