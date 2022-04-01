const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArray = input.map((item) => +item);

solution(inputArray);

function solution(N) {
  let maxN = 0;
  let maxNIdx;
  for (let i = 0; i < 9; i++) {
    if (N[i] > maxN) {
      maxN = N[i];
      maxNIdx = i + 1;
    }
  }
  console.log(`${maxN} ${maxNIdx}`);
}
