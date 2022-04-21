const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 0; ; i++) {
  const el = input[i]
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => {
      return b - a;
    });
  if (el[0] === 0 && el[1] === 0 && el[2] === 0) {
    break;
  }
  inputArr.push(el);
}

solution(inputArr);

function solution(arr) {}
