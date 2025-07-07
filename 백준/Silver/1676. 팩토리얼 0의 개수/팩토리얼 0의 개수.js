const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const N = input[0];

// 팩토리얼 계산 중 10이 한 번 곱해지면 +1, 100이 한 번 곱해지면 +2 ...
// => 곱해지는 요소 중 약수로 2와 5를 각각 가지는 횟수를 구하기.
function How_Many_zero(n) {
    let twos = 0;
    let fives = 0;
    for (let i = 1; i <= n; i++) {
        let value = i;
        while (value % 2 == 0) {
            value /= 2;
            twos++;
        }
        while (value % 5 == 0) {
            value /= 5;
            fives++;
        }
    }

    return Math.min(twos, fives);
}

const answer = How_Many_zero(N);

console.log(answer);
