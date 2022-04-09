const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");

solution(input);

function solution(N) {
  const reverseArray = [];
  for (let i = 0; i < input.length; ++i) {
    reverseArray.push(input[i].split("").reverse().join(""));
  }
  reverseArray.map((item) => +item);
  console.log(Math.max(...reverseArray));
}
