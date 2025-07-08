const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);
let count = new Array(N).fill(0);
count.splice(0, 3, 0, 1, 1);

for (let i = 3; i < N; i++) {
    const num = i + 1;
    let next_num = num - 1;
    let options = new Array();
    options.push(count[num - 2] + 1);
    if (num % 3 == 0) {
        options.push(count[num / 3 - 1] + 1);
    }
    if (num % 2 == 0) {
        options.push(count[num / 2 - 1] + 1);
    }
    count[num - 1] = Math.min(...options);
}

console.log(count[N - 1]);