const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

const max = 100000;
let dp = new Array(max + 1);
dp[1] = [1n, 2n];
// 이전 줄이 0 0 이면 다음 줄은 0 0, 0 1, 1 0 (3개)
// 이전 줄이 0 1 이거나 1 0 이면 다음 줄은 0 0, [1 0 혹은 0 1] (2개)
for (let i = 2; i <= max; i++) {
    const pre = dp[i-1];
    dp[i] = [(pre[0] + pre[1]) % 9901n, (2n * pre[0] + pre[1]) % 9901n];
}

console.log(((dp[N][0] + dp[N][1]) % 9901n).toString());