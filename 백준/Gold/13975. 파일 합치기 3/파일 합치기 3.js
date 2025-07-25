const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];

let line = 1;
for (let t = 0; t < T; t++) {
    const N = +input[line++];
    const files = input[line++].split(' ').map(Number);
    const heap = [];

    // 최소 힙 삽입 함수
    const push = (x) => {
        heap.push(x);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    // 최소 힙 삭제 함수
    const pop = () => {
        const min = heap[0];
        const last = heap.pop();
        if (heap.length === 0) return min;
        heap[0] = last;
        let i = 0;
        while (1) {
            const l = 2 * i + 1, r = 2 * i + 2;
            let minIdx = i;
            if (l < heap.length && heap[l] < heap[minIdx]) minIdx = l;
            if (r < heap.length && heap[r] < heap[minIdx]) minIdx = r;
            if (minIdx === i) break;
            [heap[i], heap[minIdx]] = [heap[minIdx], heap[i]];
            i = minIdx;
        }
        return min;
    };

    for (const f of files) push(f);

    let sum = 0;
    while (heap.length > 1) {
        const a = pop();
        const b = pop();
        sum += a + b;
        push(a + b);
    }

    console.log(sum);
}
