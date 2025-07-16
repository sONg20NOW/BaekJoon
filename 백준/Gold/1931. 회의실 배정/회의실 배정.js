const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

let meet = new Array(N);
for (let i = 0; i < N; i++) {
    meet[i] = input[i + 1].split(' ').map(Number);
}

// 끝 시간 나중에 -> 시작 시간 나중에 정렬
meet.sort((a, b) => {
    const [start_a, end_a] = a;
    const [start_b, end_b] = b;

    return end_a - end_b;
})

meet.sort((a, b) => {
    const [start_a, end_a] = a;
    const [start_b, end_b] = b;

    return start_a - start_b;
})

// meet.forEach((v) => console.log(v))
let temp_meet = meet[0]
let count = 1;

for (let i = 1; i < N; i++) {
    // 최근에 선택된 미팅과 겹침 : start 시간이 최근 선택 미팅 end 시간보다 앞섬.
    // 두 겹치는 미팅의 두 end 시간을 비교해서 더 end 시간이 빠른 미팅으로 교체.
    if (meet[i][0] < temp_meet[1] && meet[i][1] < temp_meet[1]) {
        temp_meet = meet[i];
    } 
    // 안 겹치는 경우 : 추가.
    else if (!(meet[i][0] < temp_meet[1])) {
        temp_meet = meet[i]
        count++;
    }
}

console.log(count)

