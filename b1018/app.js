const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputM] = input[0].split(" ").map((item) => +item);
const inputArray = [];

for (let i = 1; i <= inputM; i++) {
  input[i] = input[i].slice(0, inputM);
  inputArray.push([input[i]]);
}

solution();

function solution() {}
