const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

const X = input[1].split(' ').map((v) => parseInt(v));

const nums = new Set();

for (let n of X) {
    nums.add(n);
}

let numsArr = Array.from(nums).sort((a, b) => a - b);
// 병목 지점 : O(N^2)
// const answer = X.map((v) => numsArr.indexOf(v));
// Map 사용
const indexMap = new Map();
numsArr.forEach((v, i) => indexMap.set(v, i));
const answer = X.map((v) => indexMap.get(v));

console.log(answer.join(' '));