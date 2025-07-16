const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);

let stairs = new Array(n);
for (let i = 0; i < n; i++) {
    stairs[i] = parseInt(input[i + 1]);
}

// 모든 경우 = n-1 번째 계단을 밟는 경우 + n-2 번째 계단을 밟는 경우
// i. n-1번째 계단을 밟는 경우 : n-2번째 계단은 밟지 않고, n-3번째 계단은 밟아야 함.
// o x o o => dp[n - 3] + stairs[n - 1] + stairs[n]
// ii. n-2번째 계단을 밟는 경우 : 
// ? o x o => dp[n - 2] + stairs[n]
let dp = new Array(n).fill(0);
dp[0] = stairs[0];
if (n >= 1) {
    dp[1] = stairs[0] + stairs[1];
}
if (n >= 2) {
    dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
}
for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i-3] + stairs[i - 1] + stairs[i], dp[i - 2] + stairs[i]);
}

console.log(dp[n - 1]);
