const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

const inputArr = [];
let idx = 0;
while (input[idx] > 0) {
  inputArr.push(input[idx]);
  idx++;
}

solution(inputArr);

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

function solution(array) {
  for (let i = 0; i < array.length; i++) {
    let cnt = 0;
    const n = array[i];
    for (let j = n + 1; j <= 2 * n; j++) {
      if (primeNum(j)) {
        cnt++;
      }
    }
    console.log(cnt);
  }
}
