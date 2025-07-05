const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const answer = [];

const N = input[0];
const my_cards = input[1].split(' ').map((n) => parseInt(n));

let stat = new Map();

my_cards.forEach((v) => (stat.has(v) ? stat.set(v, stat.get(v) + 1) : stat.set(v, 1)));

const M = input[2];
const tries = input[3].split(' ').map((n) => parseInt(n));

tries.forEach((v) => answer.push(stat.has(v) ? stat.get(v) : 0));

console.log(answer.join(' '));