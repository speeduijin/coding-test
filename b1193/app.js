const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(X) {
  let cnt = 0;

  while (X > 0) {
    cnt++;
    X -= cnt;
  }

  const B = cnt + X;
  const A = 1 - X;

  if (cnt % 2 === 0) {
    console.log(`${B}/${A}`);
  } else {
    console.log(`${A}/${B}`);
  }
}
