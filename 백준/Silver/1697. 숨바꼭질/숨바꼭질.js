const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const MAX = 100001;
const visited = new Uint8Array(MAX); // 혹은 Uint32Array도 가능
const queue = new Array(MAX);
let head = 0, tail = 0;

queue[tail++] = { pos: N, step: 0 };
visited[N] = 1;

while (head < tail) {
    const { pos, step } = queue[head++];

    if (pos === K) {
        console.log(step);
        break;
    }

    const next = [pos - 1, pos + 1, pos * 2];
    for (const np of next) {
        if (np >= 0 && np < MAX && !visited[np]) {
            visited[np] = 1;
            queue[tail++] = { pos: np, step: step + 1 };
        }
    }
}
