const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function arrayPlus(x, y) {
    z = [0, 0];
    for (let i = 0; i < 2; i++) {
        z[i] = x[i] + y[i];
    }

    return z;
}

let history = new Array(40).fill(NaN);
history[0] = [1, 0];
history[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
    history[i] = arrayPlus(history[i-1], history[i-2]);
}

const T = parseInt(input[0]);
let answer = [];
for (let i = 0; i < T; i++) {
    const num = parseInt(input[i + 1]);
    answer.push(history[num]);
}

console.log(answer.map((c) => (c.join(' '))).join('\n'));

