const fs = require('fs');

const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

let fruits = input[1].split(' ').map(Number);
let max = 0;
// 아이디어 : 세 과일 씩 보면서 진행 -> 세 과일의 종류가 2개 이하일 때만 진행 
// -> 앞으로, 뒤로 확장
// 아이디어2 : 앞으로 진행하되, 세 종류가 되었을 때 앞에서부터 과일을 빼면서 두 종류가 될 때까지 뺴기.

let species = new Map();
for (let i = 1; i < 10; i++) {
    species.set(i, 0);
}
let which = new Set();
let head = 0;
let tail = 0;
while (tail < fruits.length) {
    // 확장하면서 과일 추가.
    const cur_fruit = fruits[tail];
    species.set(cur_fruit, species.get(cur_fruit) + 1);
    which.add(cur_fruit);
    // 만약 과일이 세 종류 이상 되었다면, 두 종류만 남을 때까지 head 이동.
    while (which.size > 2 && head < tail) {
        const head_fruit = fruits[head];
        species.set(head_fruit, species.get(head_fruit) - 1);
        // 해당 과일의 개수가 0개가 됨 -> 이제 두 종류만 남았으니 진행.
        head++;
        if (species.get(head_fruit) == 0) {
            which.delete(head_fruit);
            break;
        }
    }
    max = Math.max(max, tail - head + 1);
    tail++;
}

console.log(max);
