const { error } = require("console");
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const answer = [];

function Check(array) {
    let stack = [];

    for (let j of array) {
        switch (j) {
            case '(':
                stack.push(1);
                break;
            case ')':
                if (stack.pop() != 1) {
                    return false;
                }
                break;
            default:
                error('error!');
                break;
        }
    }
    if (stack.length == 0) {
        return true;
    }
    return false;
}

const T = parseInt(input[0]);

for (let i = 0; i < T; i++) {
    const PS = input[i + 1].trim().split('');

    answer.push(Check(PS) ? 'YES' : 'NO');
}

console.log(answer.join('\n'));