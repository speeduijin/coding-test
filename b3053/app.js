const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(R) {
  const euclidean = (el) => {
    return Math.PI * el ** 2;
  };
  const taxicap = (el) => {
    return 2 * el ** 2;
  };

  console.log(euclidean(R).toFixed(6));
  console.log(taxicap(R));
}
