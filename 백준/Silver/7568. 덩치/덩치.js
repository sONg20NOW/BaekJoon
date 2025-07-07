const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());

const N = parseInt(input[0]);
let people = [];
let rate = new Array(N).fill(0);
for (let i = 0; i < N; i++) {
    const [w, h] = input[i + 1].split(' ').map((v) => parseInt(v));
    people.push({'weight' : w, 'height' : h});
}

for (let i = 0; i < N; i++) {
    const A = people[i];
    let bigger = 1;
    for (let j = 0; j < N; j++) {
        const B = people[j];
        if (A.height < B.height && A.weight < B.weight) bigger++;
    }
    rate[i] = bigger;
}

console.log(rate.join(' '))