const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  const arr = [];
  for (let i = 666; ; i++) {
    const strI = String(i);
    for (let j = 0; j <= strI.length - 3; j++) {
      if (
        !arr.includes(strI) &&
        strI[j] === "6" &&
        strI[j + 1] === "6" &&
        strI[j + 2] === "6"
      ) {
        arr.push(strI);
        if (arr.length === N) {
          console.log(arr[N - 1]);
          return;
        }
      }
    }
  }
}
