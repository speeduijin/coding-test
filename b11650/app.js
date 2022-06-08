const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputN = +input[0];
const inputArr = [];
for (let i = 1; i <= inputN; i++) {
  let el = input[i].split(" ").map((item) => +item);
  inputArr.push(el);
}
solution(inputArr);

function solution(array) {
  const resultArr = array
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    })
    .map((item) => item.join(" "));

  console.log(resultArr.join("\n"));
}
