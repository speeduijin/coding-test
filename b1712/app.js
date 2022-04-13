const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();

input = input.split(" ").map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let result = 0;
  const diff = C - B;
  if (diff <= 0) {
    result = -1;
  } else {
    result = Math.floor(A / diff) + 1;
  }
  console.log(result);
}
