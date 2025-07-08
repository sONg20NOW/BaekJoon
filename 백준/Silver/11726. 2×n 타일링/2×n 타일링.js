const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);

let method = new Array(1001).fill(0);
method.splice(0, 3, 0, 1, 2);
for (let i = 3; i <= 1000; i++) {
    method[i] = (method[i - 1] + method[i - 2]) % 10007;
}

console.log(method[n]);