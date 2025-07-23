const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M, B] = input[0].split(' ').map(Number);

let inventory = B;
let [min, max] = [Infinity, 0];
let land = Array.from(new Array(N), (_) => new Array());
for (let i = 0; i < N; i++) {
    land[i] = input[i + 1].split(' ').map(Number);
}

land.forEach((arr) => arr.forEach((v) => {
    min = Math.min(min, v);
    max = Math.max(max, v);
}));

// 형식 : [{time}, {height}]
let candidate = [];
for (let h = min; h <= max; h++) {
    let time = 0;
    let blocks = B;
    for (let i = 0; i < N; i++) {
        land[i].forEach((v) => {
            // 맞추고 싶은 높이보다 크다면 제거하기
            if (v > h) {
                const diff = (v - h);
                time += 2 * diff;
                blocks += diff;
            }
            // 맞추고 싶은 높이보다 낮다면 추가하기
            else if (v < h) {
                const diff = (h - v);
                time += diff;
                blocks -= diff;
            }
            
        })
    }
    if (blocks < 0) break;
    candidate.push([time, h]);
}

candidate.sort((a, b) => b[1] - a[1]);
candidate.sort((a, b) => a[0] - b[0]);
console.log((candidate.length > 0) ? candidate[0].join(' ') : "No Answer");

