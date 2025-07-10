const { error } = require('console');
const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = parseInt(input[0]);

let color = Array.from(N, (_) => Array.from(N));
let [blue, white] = [0, 0];

for (let i = 0; i < N; i++) {
    color[i] = input[i + 1].split(' ').map((v) => parseInt(v))
}

function IsFullColor(arr) {
    const color = arr[0][0];
    for (let row of arr) {
        for (let node of row) {
            if (node != color)  return -1;
        }
    }
    return color;
}

function Cut(arr) {
    let n = arr.length;
    // 위 아래 절반 나누기
    let [up, down] = [arr.slice(0, n/2), arr.slice(n/2, n)];
    return [up.map((row) => row.slice(0, n/2)), up.map((row) => row.slice(n/2, n)), down.map((row) => row.slice(0, n/2)), down.map((row) => row.slice(n/2, n))];
}

function CheckColor(arr) {
    if (arr.length == 1) {
        if (arr[0][0] == 1) blue++;
        else    white++; 
    } 
    else {
        let c = IsFullColor(arr);
        switch (c) {
            case 1:
                blue++;
                break;
            case 0:
                white++;
                break;
            case -1:
                let [upleft, upright, downleft, downright] = Cut(arr);
                [upleft, upright, downleft, downright].forEach((a) => CheckColor(a));
                break;
            default:
                error("invalid IsFullColor(arr) output!");
                break;
        }
    }
}



CheckColor(color);

console.log([white, blue].join('\n'));