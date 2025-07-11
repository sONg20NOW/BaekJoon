const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

let count = new Array(91).fill(0n);
// count.splice(0, 3, 1, 1, 1);
count[0] = 1n;
count[1] = 1n;
count[2] = 1n;



for (let i = 3; i <= 90; i++) {
    let sum = 0n;
    for (let j = i - 2; j >= 0; j--) {
        sum += count[j];
    }
    count[i] = sum;
}

// for (let i = 3; i <= 90; i++) {
//     count[i] = count[i-1] + count[i-2];
// }

console.log(count[N].toString());