const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

solution(input[0], input[1]);

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

function solution(M, N) {
  for (let num = M; num <= N; num++) {
    if (primeNum(num)) {
      console.log(num);
    }
  }
}
