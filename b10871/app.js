const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputX] = input[0].split(" ").map((item) => +item);
const arrayA = input[1].split(" ").map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
  const answer = [];
  for (let i = 0; i < N; ++i) {
    if (arrayA[i] < X) {
      answer.push(A[i]);
    }
  }
  console.log(answer.join(" "));
}
