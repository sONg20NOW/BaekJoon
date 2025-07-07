const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let i = 0;
let answer = [];
while(input[i] != '.') {
    const s = input[i];
    let bracket = [];
    let flag = true;
    let t = undefined;
    for (let c of s) {
        if (!flag)  break;
        switch(c) {
            case '(':
                bracket.push(0);
                break;
            case '[':
                bracket.push(1);
                break;
            case ')':
                t = bracket.pop();
                if (t == undefined || t != 0) {
                    flag = false;
                }
                break;
            case ']':
                t = bracket.pop();
                if (t == undefined || t != 1) {
                    flag = false;
                }
                break;
            default:
                break;
        }
    }
    if (flag) {
        if (bracket.length == 0) {
            flag = true;
        }
        else {
            flag = false;
        }
    }


    if (flag) {
        answer.push('yes');
    }
    else {
        answer.push('no');
    }

    i++;
}

console.log(answer.join('\n'));