const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, X] = input[0].split(' ').map(Number);
let T = Array.from(new Array(N), (_) => new Array());

for (let i = 0 ; i < M; i++) {
    const [start, end, t] = input[i + 1].split(' ').map(Number);
    T[start - 1].push([end - 1, t]);
}

let max = 0;
// i번 마을에서 (X-1) 마을까지 걸리는 최소 경로 탐색. (각 마을별로)
for (let i = 0; i < N; i++) {
    max = Math.max(Dijkstra(i, X-1) + Dijkstra(X-1, i), max);
    
}

console.log(max)

function Dijkstra(start, end) {
    let checked = new Array(N).fill(false);
    let distance = new Array(N).fill(Infinity);
    distance[start] = 0;
    while(true) {
        // 목표로 하는 최단경로를 이미 얻었으면 break
        if (checked[end])   break;
        // 최소 distance를 가지는 노드를 선택
        const min_idx = FindMinIdx(distance, checked);
        // 모두 체크했으면 나가기.
        if (min_idx == -1)  break;
        const dist = distance[min_idx];
        checked[min_idx] = true;
        // 만약 더 확장되지 못한다면 종료.
        if (dist == Infinity)   break;
        // 해당 노드의 인접 노드들에 대하여,
        // min(기존 비용, 현재 노드의 distance 값 + 비용) 으로 업데이트.
        for (let [v, time] of T[min_idx]) {
            if (checked[v])   continue;
            distance[v] = Math.min(distance[v], dist + time);
        }
    }
    return distance[end];
}

function FindMinIdx(distance, checked) {
    let min = Infinity;
    let min_idx = -1;
    for (let i = 0; i < N; i++) {
        if (!checked[i] && min > distance[i]) {
            min_idx = i;
            min = distance[min_idx];
        }
    }

    return min_idx;
}
