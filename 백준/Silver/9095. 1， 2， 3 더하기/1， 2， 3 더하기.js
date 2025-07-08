const fs = require("fs");
const { METHODS } = require("http");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const T = parseInt(input[0]);
let n_method = new Array(11).fill(0);

function Method(n) {
    return n_method[n-1];
}

n_method.splice(0, 3, 1, 2, 4);
for (let i = 4; i <= 11; i++) {
    let res = 0;
    res += Method(i - 1) + Method(i - 2) + Method(i - 3);

    n_method[i - 1] = res;
}

let answer = [];

for (let i = 0; i < T; i++) {
    answer.push(Method(parseInt(input[i + 1])));    
}

console.log(answer.join('\n'));