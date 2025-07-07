const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const L = parseInt(input[0]);
const s = input[1];

const r = 31;
const M = 1234567891;

function CalcH(s, L) {
    let sum = 0

    for (let i = 0; i < L; i++) {
        sum += (s[i].charCodeAt() - 'a'.charCodeAt() + 1) * Math.pow(r, i);
    }

    return sum % M;
}

console.log(CalcH(s, L));