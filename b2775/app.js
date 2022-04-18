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

function solution(T, testCaseArray) {
  for (let j = 0; j < T; j++) {
    let result = 1;
    //이항정리
    const testCase = testCaseArray[j];
    const n = testCase.n + testCase.k;
    const k = testCase.n - 1; //이항계수 위치 0부터

    for (let i = n; i >= n - k + 1; i--) {
      result *= i;
    }
    for (let i = k; i >= 1; i--) {
      result /= i;
    }

    console.log(result);
  }
}
