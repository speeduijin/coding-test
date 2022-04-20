const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let num = 2;
  while (N > 1) {
    if (N % num !== 0) {
      num++;
    } else {
      N /= num;
      console.log(num);
    }
  }
}
