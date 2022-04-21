const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 1; i <= +input[0]; i++) {
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

function solution(T, arr) {
  for (let i = 0; i < T; i++) {
    const num = arr[i];
    let a = 1;
    const primeArr = [];

    while (a < (1 / 2) * num) {
      a++;
      const b = num - a;
      if (primeNum(a)) {
        num - a;
        if (primeNum(b)) {
          primeArr.push({ A: a, B: b });
        }
      }
    }

    const result = primeArr.pop();
    console.log(`${result.A} ${result.B}`);
  }
}
