const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

const [inputN, ...inputArr] = input;

solution(inputN, inputArr);

function solution(N, array) {
  let result = "";
  const stackArr = [];
  const intArr = Array(N)
    .fill(0)
    .map((el, idx) => idx + 1);

  for (let i = 0; i < N; i++) {
    while (array[i] !== stackArr[stackArr.length - 1] && intArr[0] > 0) {
      stackArr.push(intArr.shift());
      result += "+\n";
    }
    if (array[i] === stackArr[stackArr.length - 1]) {
      stackArr.pop(stackArr[stackArr.length - 1]);
      result += "-\n";
    }
  }

  stackArr.length !== 0 ? console.log("NO") : console.log(result);
}
