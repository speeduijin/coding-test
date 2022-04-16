const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, V) {
  const tempGoal = V - A;
  const oneDay = A - B;

  const result = Math.ceil(tempGoal / oneDay) + 1;

  console.log(result);
}
