const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const el = input[1].split(" ").map((item) => +item);

const inputArr = [];
for (let i = 0; i < +input[0]; i++) {
  inputArr.push(el[i]);
}

solution(+input[0], inputArr);

function solution(N, array) {}
