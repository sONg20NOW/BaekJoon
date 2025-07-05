const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let i = 0;
let answer = [];
while (input[i] != "0 0 0") {
    let nums = input[i].split(' ');

    nums = nums.map((n) => parseInt(n));
    nums = nums.sort((a, b) => a - b);



    if (Math.pow(nums[2], 2) == Math.pow(nums[1], 2) + Math.pow(nums[0], 2)) {
        answer.push('right');
    }
    else {
        answer.push('wrong');
    } 
    i++;
}

console.log(answer.join('\n'));