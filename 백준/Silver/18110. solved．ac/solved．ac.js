const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
// k : 제외할 인원 수 / 2 (15%)
const k = Math.round(n * (15/ 100));
let level = [];
for (let i = 0; i < n; i++) {
    level.push(parseInt(input[i + 1]));
}

level.sort((a, b) => a - b);

level.splice(n - k, k);

level.splice(0, k);

const avg = (level.length == 0) ? 0 : level.reduce((acc, cur) => acc + cur, 0) / level.length;
console.log(Math.round(avg));