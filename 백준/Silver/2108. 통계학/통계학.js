const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);
let nums = [];
for (let i = 0; i < N; i++) {
    nums.push(parseInt(input[i + 1]));
}

let answer = [];
// 산술평균
answer.push(nums.length == 0 ? 0 : Math.round(nums.reduce((acc, cur) => acc + cur, 0) / nums.length));
// 중앙값
nums.sort((a,b) => a-b);
answer.push(nums[Math.floor(N/2)]);
// 최빈값
let num_map = new Map();
for (let i = 0; i < N; i++) {
    if (num_map.has(nums[i].toString())) {
        num_map.set(nums[i].toString(), num_map.get(nums[i].toString())+1);
    }
    else {
        num_map.set(nums[i].toString(), 1);
    }
}
let f = Math.max(...num_map.values());
let f_nums = [];
num_map.forEach((v, k, m) => {
    if (v == f) f_nums.push(parseInt(k));
})
f_nums.sort((a, b) => a - b);
answer.push((f_nums.length == 0) ? 0 : (f_nums.length > 1) ? f_nums[1] : f_nums[0]);
// 범위
answer.push(nums[N-1] - nums[0]);

console.log(answer.join('\n'));


