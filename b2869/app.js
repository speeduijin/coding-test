const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, V) {}
