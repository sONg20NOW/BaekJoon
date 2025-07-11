const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

// nCk = n-1Ck-1 + n-1Ck
let dp = Array.from(new Array(1001), (_) => Array.from(Array(1001)).fill(1n));


for (let n = 1; n <= 1000; n++) {
    for (let k = 1; k <= n; k++) {
        if (n == k)  dp[n][k] = 1n;
        else    dp[n][k] = dp[n-1][k-1] + dp[n-1][k];
    } 
}

console.log((dp[N][K] % 10007n).toString());