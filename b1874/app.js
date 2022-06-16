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

function solution(N, array) {}
