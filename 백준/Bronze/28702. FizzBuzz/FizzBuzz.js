const fs = require("fs");
const { parse } = require("path");

const input = fs.readFileSync("/dev/stdin").toString().split('\n').map((s) => s.trim());
const output = ['Fizz', 'Buzz', 'FizzBuzz'];

let [idx, value] = [-1, 0]

for (let i = 0; i < 3; i++) {
    if(output.includes(input[i]))   continue;
    idx = i;
    value = parseInt(input[i]);
    break;
}

const v = value + (3 - idx);
if (v % 3 == 0) {
    if (v % 5 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log("Fizz");
    }
}
else if (v % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log(v);
}


