const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((v) => parseInt(v));
const trees = input[1].split(' ').map((v) => parseInt(v));

// 높이 별로 잘라지는 나무 높이를 가지는 배열?
// 이진 트리 구조로 탐색?

function Cut(H, arr) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += (arr[i] > H ? arr[i] - H : 0);
    }
    return sum;
}

let H = Math.max(...trees);
let upper = H;
let lower = 0;
while (upper != lower) {
    H = Math.round ((upper + lower) / 2);
    // console.log(`before) upper : ${upper}, lower : ${lower}, H : ${H}`)
   
    // 현재 H로는 부족.
    if (Cut(H, trees) < M) {
        upper = H - 1;
    }
    // 현재 H로는 가능 (하지만 과한지 모름)
    else {
        lower = H;
    }
    // console.log(`after) upper : ${upper}, lower : ${lower}, H : ${H}`)
}


console.log(upper);