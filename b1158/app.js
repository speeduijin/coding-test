const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");

const [inputN, inputK] = input;

solution(+inputN, +inputK);

function solution(N, K) {
  const answer = [];

  const arrN = Array(N)
    .fill(0)
    .map((item, idx) => {
      return idx + 1;
    });
}
