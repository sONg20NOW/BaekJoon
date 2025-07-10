const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);
let max_heap = [];

function Swap(ia, ib) {
    // max_heap[ia], max_heap[ib] = max_heap[ib], max_heap[ia];
    [max_heap[ia], max_heap[ib]] = [max_heap[ib], max_heap[ia]];
}

function AddNode(x) {
    let idx = max_heap.length;
    max_heap[idx] = x;
    // bubble up
    while (true) {
        let parentIdx = Math.floor((idx - 1) / 2);
        if (max_heap[parentIdx] < max_heap[idx]) {
            Swap(parentIdx, idx);
            idx = parentIdx
        }
        else    break;
    }
}

function RemoveNode() {
    const rootNode = max_heap[0];
    const leafNode = max_heap.pop();
    if (max_heap.length == 0) {
        return (leafNode == undefined ? 0 : leafNode);
    }
    max_heap[0] = leafNode;
    let idx = 0;
    // bubble down
    while (true) {
        let maxIdx = idx;
        let [leftIdx, rightIdx] = [idx * 2 + 1, idx * 2 + 2];
        // If child node is bigger
        if ((leftIdx < max_heap.length && max_heap[idx] < max_heap[leftIdx]) || (rightIdx < max_heap.length && max_heap[idx] < max_heap[rightIdx])) {
            if (leftIdx < max_heap.length) {
                maxIdx = leftIdx;
            }
            if (rightIdx < max_heap.length && max_heap[rightIdx] > max_heap[leftIdx]) {
                maxIdx = rightIdx;
            }
            Swap(maxIdx, idx);
            idx = maxIdx;
        }
        else    break;
    }

    return rootNode;
}

let answer = [];

for (let i = 0; i < N; i++) {
    const cmd = parseInt(input[i + 1]);
    if (cmd > 0) {
        // add 
        AddNode(cmd);
    }
    else {
        // remove
        answer.push(RemoveNode());
    }
}

console.log(answer.join('\n'));