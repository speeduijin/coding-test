const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function fbn(el) {
  if (el === 0 || el === 1) {
    return el;
  } else {
    return fbn(el - 1) + fbn(el - 2);
  }
}

function solution(N) {
  console.log(fbn(N));
}
