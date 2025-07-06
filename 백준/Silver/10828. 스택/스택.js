const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');


const N = parseInt(input[0]);

let stack = new Array();

let answer = new Array();

for (let i = 0; i < N; i++) {
    const cmd_arr = input[1 + i].trim().split(' ');
    
    if (cmd_arr.length == 1) {
        switch (cmd_arr[0]) {
            case 'pop':
                answer.push((stack.length == 0 ? -1 : stack.pop()));
                break;
            case "size":
                answer.push(stack.length);
                break;
            case "empty":
                answer.push((stack.length == 0) ? 1 : 0);
                break;
            case "top":
                answer.push((stack.length == 0) ? -1 : stack[stack.length - 1]);
                break;
            default:
                break;
        }
    }
    else {
        const X = cmd_arr[1];
        stack.push(X);
    }
}

console.log(answer.join('\n'));