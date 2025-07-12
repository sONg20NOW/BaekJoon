const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

let dp = new Array(N).fill(-1);
dp[0] = 1;

for (let i = 1; i <= N; i++) {
    const cur_num = A[i];
    let checklist_dp = dp.slice(0, i);

    while (true) {
        const max_dp = Math.max(...checklist_dp);
        if (max_dp == -1) {
            dp[i] = 1;
            break;
        }
        const max_i = checklist_dp.indexOf(max_dp);
        const max_A = A[max_i];
        if (max_A < cur_num) {
            dp[i] = max_dp + 1;
            break;
        }
        else {
            checklist_dp[max_i] = -1;
        }

    }
}

console.log(Math.max(...dp));