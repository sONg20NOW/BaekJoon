const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
let adjecent = Array.from(new Array(N + 1), (_) => new Array());
for (let i = 0; i < N; i++) {
    const info = input[i + 1].split(' ').map(Number);
    info.forEach((v, idx) => {
        if (v == 1) {
            adjecent[i + 1].push(idx + 1);
        }
    })
}
let answer = Array.from(new Array(N), (_) => new Array(N).fill(0));
for (let i = 0; i < N; i++) {
    const start = i + 1;
    let queue = [start];
    let checked = new Array(N+1).fill(false);
    let first = true;
    while (queue.length > 0) {
        const cur = queue.shift();
        if (first) {
            first = false;
        }
        else {
            answer[i][cur - 1] = 1;
            checked[cur] = true;
        }

        for (let v of adjecent[cur]) {
            if (!checked[v]) {
                queue.push(v);
                checked[v] = true;
            }
        }
    }
}

answer.forEach((arr) => console.log(arr.join(' ')))