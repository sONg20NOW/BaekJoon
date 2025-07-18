const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[n])