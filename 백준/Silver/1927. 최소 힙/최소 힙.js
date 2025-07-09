const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

// left ptr, right ptr, value
// 힙 구현 : 여러 개의 노드
let min_heap = [];

function Swap(idx_a, idx_b) {
    let temp = min_heap[idx_a];
    min_heap[idx_a] = min_heap[idx_b];
    min_heap[idx_b] = temp;

    return true;
}

function addNode(v) {
    // 왼쪽 최하단에 노드 삽입
    let i = min_heap.length;
    min_heap.push(v);
    // 현재 노드의 인덱스가 i일 때 부모 노드의 인덱스 : Math.floor((i - 1) / 2)
    // 현재 노드의 인덱스가 i일 때 자식 노드의 인덱스 : i * 2 + 1 and i * 2 + 2
    while(true) {
        const parentIdx = Math.floor((i - 1) / 2);
        if (min_heap[parentIdx] > min_heap[i]) {
            Swap(parentIdx, i);
            i = parentIdx;
        } else {
            break;
        }
    }
}

function removeNode() {
    if (min_heap.length == 0) {
        return 0;
    }
    else if (min_heap.length == 1) {
        return min_heap.pop();
    }
    let rootNode = min_heap[0];
    min_heap[0] = min_heap.pop();
    let curIdx = 0;
    while(true) {
        const leftIdx = curIdx * 2 + 1;
        const rightIdx = curIdx * 2 + 2;

        let minIdx = curIdx;

        // 두 자식 노드 중 하나가 더 작은 경우 : Swap이 필요한 경우.
        if ((leftIdx < min_heap.length && min_heap[leftIdx] < min_heap[curIdx]) || (rightIdx < min_heap.length && min_heap[rightIdx] < min_heap[curIdx])) {
            // 왼쪽 자식 노드가 존재하면
            if (leftIdx < min_heap.length) {
                minIdx = leftIdx;
            }
            // 오른쪽 자식 노드도 존재하면 두 자식 노드 값 비교.
            if (rightIdx < min_heap.length && min_heap[rightIdx] < min_heap[minIdx]) {
                minIdx = rightIdx;
            }
            // Swap 진행
            Swap(minIdx, curIdx);
            curIdx = minIdx;
        }
        else {
            break;
        }
    }

    return rootNode;
}

let answer = [];
for (let i = 0; i < N; i++) {
    const cmd = parseInt(input[i + 1]);
    if (cmd == 0) {
        answer.push(removeNode());
    } else {
        addNode(cmd);
    }
}

console.log(answer.join('\n'));