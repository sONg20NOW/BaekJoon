const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);

let tomatos = Array.from(Array(n), (_) => new Array(m).fill(0));
// 행별로 안익은 토마토의 개수
let num_tomatos = new Array(n).fill(0);
let coocked_tomatos = new Array(1000 * 1000);
let head = 0;
let tail = 0;
for (let r = 0; r < n; r++) {
    tomatos[r] = input[r + 1].split(' ').map(Number);
    for (let c = 0; c < m; c++) {
        if (tomatos[r][c] == 0) {
            num_tomatos[r]++;
        }
        else if (tomatos[r][c] == 1) {
            coocked_tomatos[tail++] = [r, c, 0]
        }
    }
}
let max = 0;
while (head < tail) {
    const [r, c, count] = coocked_tomatos[head++];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let dir of directions) {
        const [next_r, next_c] = [r + dir[0], c + dir[1]]
        if ((next_r >= 0 && next_r < n) && (next_c >= 0 && next_c < m)
             && tomatos[next_r][next_c] == 0) {
            tomatos[next_r][next_c] = 1;
            num_tomatos[next_r]--;
            coocked_tomatos[tail++] = [next_r, next_c, count + 1];
            max = Math.max(max, count + 1);
        }
    }
}

// 안 익은 토마토가 있는 경우
let flag = true;
num_tomatos.forEach((v) => {
    if (v > 0) {
        flag = false;
    }
})

if (flag) {
    console.log(max);
}
else {
    console.log(-1);
}