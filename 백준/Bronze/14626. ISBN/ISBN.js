const { error } = require("console");
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const ISBN = input[0];

const threes = [0, 3, 6, 9, 2, 5, 8, 1, 4, 7];

let rest_sum = 0;
let missing_idx = -1;
let answer = -1;
for (let i = 0; i < 13; i++) {
    if (ISBN[i] != '*') {
        rest_sum += (i % 2 == 0 ? 1 : 3) * parseInt(ISBN[i]);
    }
    else {
        missing_idx = i;
    }
}
rest_sum %= 10;


if (missing_idx < 0)    error("no missing..?");

if (missing_idx % 2 == 0) {
    answer = (10 - rest_sum) % 10;
}
else {
    // (3 * answer + rest_sum) mod 10 = 0
    answer = (10 - rest_sum) % 10;
    answer = threes.indexOf(answer);
}

if (answer < 0)    error("no answer..?");

console.log(answer);