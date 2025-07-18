const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0]);
const lines = input[1].split(' ').map(Number);
let cities = input[2].split(' ').map(Number);
// 다음 도시가 마지막 도시라면 그 도시의 주유비는 싸다고 책정. (그 도시까지 그냥 가도록.)
cities[cities.length - 1] = 0n;

let money = 0n;

let head = 0n;
let tail = 0n;
while (tail < cities.length) {
    const head_fee = BigInt(cities[head]);
    const tail_fee = BigInt(cities[tail]);
    // 다음 도시의 주유비가 더 싸다면
    if (head_fee > tail_fee) {
        money += sum(head, tail, lines) * head_fee;
        head = tail;
    }
    // 다음 도시의 주유비가 같거나 더 비싸다면 더 싼 도시가 나올 때까지 진행.
    else {
        tail++;
    }
}

console.log(money.toString());

function sum(start, end, arr) {
    let sum = 0n;
    for (let i = start; i < end; i++) {
        sum += BigInt(arr[i]);
    }

    return sum;
}