const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const el = input[1].split(" ").map((item) => +item);

const inputArr = [];
for (let i = 0; i < +input[0]; i++) {
  inputArr.push(el[i]);
}

solution(+input[0], inputArr);

function primeNum(el) {
  //   if (el === 1) {
  //     return false;
  //   } else if (el !== 2 && el % 2 === 0) {
  //     return false;
  //   } else {
  //     for (let i = 3; i <= Math.sqrt(el); i += 2) {
  //       if (el % i === 0) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }

  let num = 2;
  while (el > 1) {
    if (el % num !== 0) {
      num++;
    } else if (el / num === 1) {
      return true;
    } else {
      return false;
    }
  }
}

function solution(N, array) {
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    const curNum = array[i];

    if (primeNum(curNum)) {
      cnt++;
    }
  }

  console.log(cnt);
}
