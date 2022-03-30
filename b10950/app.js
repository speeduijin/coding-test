const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputT = +input[0];

const testCaseArray = [];
for (let i = 1; i <= inputT; i++) {
  const testCaseValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: testCaseValue[0], B: testCaseValue[1] });
}

solution(inputT, testCaseArray);

function solution(T, testcaseArray) {
  // Write your code
  for (let i = 0; i < T; i++) {
    const { A, B } = testcaseArray[i];
    console.log(A + B);
  }
}
