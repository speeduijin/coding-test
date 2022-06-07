const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  const arrayN = [...String(N)];
  arrayN.sort((a, b) => b - a);

  console.log(+arrayN.join(""));
}
