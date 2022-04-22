const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 1; i <= +input[0]; i++) {
  const el = input[i].split(" ").map((item) => +item);
  inputArr.push({
    x1: el[0],
    y1: el[1],
    r1: el[2],
    x2: el[3],
    y2: el[4],
    r2: el[5],
  });
}

solution(+input[0], inputArr);

function solution(T, testArr) {}
