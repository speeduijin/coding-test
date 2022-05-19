const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let movieNumber = 666;
  let count = 0;
  while (true) {
    if (movieNumber.toString().includes("666")) {
      count++;
      if (count === N) {
        console.log(movieNumber);
        break;
      }
    }
    movieNumber++;
  }
}
