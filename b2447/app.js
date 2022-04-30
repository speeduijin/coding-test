const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  const ansArr = [];

  const star = (i, j, n) => {
    if (i % 3 === 1 && j % 3 === 1) {
      ansArr.push(" ");
    } else {
      if (n === 1) {
        ansArr.push("*");
      } else {
        star(parseInt(i / 3), parseInt(j / 3), parseInt(n / 3));
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      star(i, j, N);
    }
    ansArr.push("\n");
  }

  console.log(ansArr.join(""));
}
