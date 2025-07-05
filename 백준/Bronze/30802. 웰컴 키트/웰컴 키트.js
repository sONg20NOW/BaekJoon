const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input[0];
const Tshirts = input[1].split(' ').map((n) => parseInt(n));
const [T, P] = input[2].split(' ').map((n) => parseInt(n));

let answer = [];
// 티셔츠 계산
let num_T = 0;
for (let n_size of Tshirts) {
    if (n_size == 0)    continue;
    num_T += Math.floor((n_size - 1) / T) + 1;
}
answer.push(num_T);

// 펜 계산
let p1 = Math.floor(N / P);
let p2 = N % P;
answer.push([p1, p2].join(' '));

console.log(answer.join('\n'));