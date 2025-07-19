const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);

let dp = new Array(50001).fill(5);
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= 50000; i++) {
    for (let j = 1; Math.pow(j, 2) <= i; j++) {
        dp[i] = Math.min(dp[i - Math.pow(j, 2)] + 1, dp[i]);
    }
}

console.log(dp[n]);