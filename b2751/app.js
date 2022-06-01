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
  array.sort((a, b) => a - b);

  console.log(array.join("\n"));
}
