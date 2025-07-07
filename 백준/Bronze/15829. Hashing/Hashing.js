const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const L = parseInt(input[0]);
const s = input[1];

const r = 31;
const M = 1234567891;

function Pow(r, i) {
    let sigma = 1;
    for (let j = 0; j < i; j++) {
        sigma = (sigma * r) % M;
    }
    return sigma;
}

function CalcH(s, L) {
    let sum = 0

    for (let i = 0; i < L; i++) {
        sum += (s[i].charCodeAt() - 'a'.charCodeAt() + 1) * Pow(r, i);
        sum = sum % M;
    }

    return sum;
}

console.log(CalcH(s, L));