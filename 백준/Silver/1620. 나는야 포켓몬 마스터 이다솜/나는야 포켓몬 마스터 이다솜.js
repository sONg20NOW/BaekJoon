const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let index2pokemon = new Array(N);
let pokemon2index = new Map();
let questions = new Array(M);

for (let i = 0; i < N; i++) {
    index2pokemon[i] = input[i+1].trim();
    pokemon2index.set(index2pokemon[i], i)
}

for (let i = 0; i < M; i++) {
    questions[i] = input[1 + N + i].trim();
}

let answer = [];
for (let q of questions) {
    const num = parseInt(q);
    // 문자열 질문이라면
    if (isNaN(num)) {
        answer.push(pokemon2index.get(q) + 1);
    }
    // 숫자 질문이라면
    else {
        answer.push(index2pokemon[num - 1])
    }
}

console.log(answer.join('\n'));