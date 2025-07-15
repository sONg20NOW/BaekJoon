const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, r, c] = input[0].split(' ').map(Number);

const n = Math.pow(2, N);

whereZ(r, c, 0, n);

// r, c는 상대좌표, start는 좌상단 노드의 값. d는 사각형의 한 변의 길이
function whereZ(r, c, start, d) {
    if (d == 1) {
        console.log(start);
        return 
    }
    const half_d = d / 2;
    let left = (c < half_d) ? true : false; 
    let up = (r < half_d) ? true : false; 



    if (left && up) {
        whereZ(r, c, start, half_d);
    }
    else if (!left && up) {
        whereZ(r, c - half_d, start + Math.pow(half_d, 2), half_d);
    }
    else if (left && !up) {
        whereZ(r - half_d, c, start + (Math.pow(half_d, 2)) * 2, half_d);
    }
    else {
        whereZ(r - half_d, c - half_d, start + (Math.pow(half_d, 2)) * 3, half_d);
    }
}