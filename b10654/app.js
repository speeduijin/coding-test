const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(input);

function solution(char) {
  console.log(char.charCodeAt());
}
