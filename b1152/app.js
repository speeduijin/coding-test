const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(str) {
  const divideStr = str.split(" ");
  let cntStr = 0;
  for (let i = 0; i < divideStr.length; ++i) {
    // if (divideStr[i] !== "")
    if (divideStr[i].length !== 0) {
      cntStr++;
    }
  }
  console.log(cntStr);
}
