const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const K = parseInt(input[0]);

let stack = [];

for (let i = 0; i < K; i++) {
    const n = parseInt(input[i + 1]);

    if (n != 0) {
        stack.push(n);
    }
    else {
        stack.pop();
    }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));