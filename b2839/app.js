const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let cnt = 0;
  const fiveW = 5;
  const threeW = 3;

  if (N % fiveW !== 0) {
    while (N > 0) {
      if (N > 2) {
        if (N % fiveW === 0) {
          N / fiveW;
          cnt += N / fiveW;
          break;
        } else {
          N -= threeW;
          cnt++;
        }
      } else {
        cnt = -1;
        break;
      }
    }
  } else {
    cnt = N / fiveW;
  }
  console.log(cnt);
}
