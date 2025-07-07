const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const T = parseInt(input[0]);

let answer = [];

let Apart = Array.from(new Array(15), () => (new Array(15).fill(0)));


Apart[0] = Apart[0].map((v, i) => i);



for (let k = 1; k <= 14; k++) {
    for (let n  = 1; n <= 14; n++) {
        Apart[k][n] = Apart[k][n-1] + Apart[k-1][n];
    }
}


for (let i = 0; i < T; i++) {
    const k = parseInt(input[1 + 2 * i]);
    const n = parseInt(input[2 + 2 * i]);

    answer.push(Apart[k][n]);
}

console.log(answer.join('\n'));