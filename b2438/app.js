const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  for (let line = 1; line <= N; line++) {
    const starCnt = line;
    let printString = "";
    for (let i = 0; i < starCnt; i++) {
      printString += "*";
    }
    console.log(printString);
  }
}
