const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const arr = [];

for (let i = 1; i < input.length; i++) {
  if (i % 2 !== 0) {
    const testCase = { k: +input[i], n: +input[i + 1] };
    arr.push(testCase);
  }
}

solution(+input[0], arr);

function solution(T, testCaseArray) {}
