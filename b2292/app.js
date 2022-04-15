const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let cnt = 1;
  N = N - 1;

  while (N > 0) {
    N -= 6 * cnt;
    cnt++;
  }
  console.log(cnt);
}
