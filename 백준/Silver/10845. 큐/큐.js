const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

let queue = new Array();
let answer = new Array();

for (let i = 0; i < N; i++) {
    const total_cmd = input[i + 1].trim().split(' ');

    if (total_cmd.includes("push")) {
        const X = total_cmd[1];
        queue.push(X);
    }
    else {
        switch (total_cmd[0]) {
            case "pop":
                answer.push((queue.length == 0) ? -1 : queue.shift());
                break;
            case "size":
                answer.push(queue.length);
                break;
            case "empty":
                answer.push((queue.length == 0) ? 1 : 0);
                break;
            case "front":
                answer.push((queue.length == 0) ? -1 : queue[0]);
                break;
            case "back":
                answer.push((queue.length == 0) ? -1 : queue[queue.length - 1]);
                break;
            default:
                break;
        }
    }
}

console.log(answer.join('\n'));