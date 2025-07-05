const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, K] = input[0].split(' ').map((n) => parseInt(n));

let C = 1;
for (let i = 0; i < K; i++) {
    C *= N--;
}
let P = 1;
for (let i = 1; i <= K; i++) {
    P *= i;
}

console.log(C / P);