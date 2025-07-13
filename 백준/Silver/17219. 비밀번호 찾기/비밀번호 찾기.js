const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let site_pw_map = new Map();
for (let i = 0; i < N; i++) {
    const [site, pw] = input[i + 1].trim().split(' ');
    site_pw_map.set(site, pw);
}

let answer= [];
for (let i = 0; i < M; i++) {
    const site = input[i + N + 1].trim();
    answer.push(site_pw_map.get(site));
}

console.log(answer.join('\n'));