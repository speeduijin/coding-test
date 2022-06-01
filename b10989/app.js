const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [inputN, ...inputArr] = input;

solution(inputN, inputArr);

function solution(N, array) {
  //메모리 초과
  const maxNum = Math.max(...array);
  const countArr = Array(maxNum + 1).fill(0);

  for (let i = 0; i < N; i++) {
    for (let num = 1; num <= maxNum; num++) {
      if (array[i] === num) {
        countArr[num]++;
      }
    }
  }

  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] !== 0) {
      for (let j = 0; j < countArr[i]; j++) {
        console.log(i);
      }
    }
  }
}
