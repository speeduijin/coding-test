const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 1; i <= +input[0]; i++) {
  const el = input[i].split(" ").map((item) => +item);
  inputArr.push(el);
}

solution(+input[0], inputArr);

function solution(T, testArr) {
  const coordCnt = (el) => {
    const [x1, y1, r1, x2, y2, r2] = el;
    const pointDiff = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const rSum = r1 + r2;
    const rDiff = Math.abs(r2 - r1);

    if (x1 === x2 && y1 === y2 && r1 === r2) {
      return -1;
    } else if (rSum < pointDiff || rDiff > pointDiff) {
      return 0;
    } else if (rSum === pointDiff || rDiff === pointDiff) {
      return 1;
    } else if (rSum > pointDiff || rDiff < pointDiff) {
      return 2;
    }
  };

  for (let i = 0; i < T; i++) {
    console.log(coordCnt(testArr[i]));
  }
}
