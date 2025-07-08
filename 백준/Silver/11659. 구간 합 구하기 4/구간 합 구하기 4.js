const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((v) => parseInt(v));
const nums = input[1].split(' ').map((v) => parseInt(v));

let presum = new Array(N + 1).fill(0);
presum[0] = 0;
for (let i = 1; i <= N; i++) {
    presum[i] = presum[i - 1] + nums[i - 1]
}

let answer = [];

for (let k = 0; k < M; k++) {
    const [i, j] = input[k + 2].split(' ').map((v) => parseInt(v));
    answer.push(- presum[i - 1] + presum[j]);
}

console.log(answer.join('\n'));