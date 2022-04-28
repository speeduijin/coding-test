const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function factorial(el) {
  if (el === 1 || el === 0) {
    return 1;
  } else {
    return el * factorial(el - 1);
  }
}

function solution(N) {
  console.log(factorial(N));
}
