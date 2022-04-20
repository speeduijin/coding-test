const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 1; i < +input[0]; i++) {
  inputArr.push(+input[i]);
}

solution(+input[0], inputArr);

function primeNum(el) {
  if (el === 1) {
    return false;
  } else if (el !== 2 && el % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(el); i += 2) {
      if (el % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function solution(T, arr) {}
