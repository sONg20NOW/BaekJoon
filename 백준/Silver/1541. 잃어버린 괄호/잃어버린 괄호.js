const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const s = input[0];

let head = 0;
let tail = 0;
let nums = [];
let symbols = [];

for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // +나 - 기호 있다면
    if (c == '+' || c == '-') {
        tail = i + 1;
        const num = s.substring(head, tail - 1);
        nums.push(num);
        head = i + 1;
        symbols.push(c);
    }
}
const num = s.substring(tail, s.length);
nums.push(num)
nums = nums.map(Number)
let after_nums = [];

let sum = nums[0];
// 모든 + 다 더하기.
for (let i = 0; i <= symbols.length; i++) {
    const symbol = (i == symbols.length) ? '-' : symbols[i];
    // +
    if (symbol == '+') {
        sum += nums[i + 1];
    }
    // -
    else {
        after_nums.push(sum);
        sum = nums[i + 1];
    }
} 

// - 처리하기.
let result = 0;
for (let i = 0; i < after_nums.length; i++) {
    const n = after_nums[i];
    if (i == 0) {
        result += n;
    }
    else {
        result -= n;
    }
}
// 출력
console.log(result)