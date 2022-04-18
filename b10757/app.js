const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");

solution(input[0], input[1]);

function solution(A, B) {
  A = BigInt(A);
  B = BigInt(B);

  const result = (A + B).toString();

  console.log(result);
}
