const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const xArr = input[1].split(" ").map((item) => +item);

solution(xArr);

function solution(array) {
  const comparedArr = [...new Set(array)].sort((a, b) => a - b);

  const comparedObj = {};

  for (let i = 0; i < comparedArr.length; i++) {
    comparedObj[comparedArr[i]] = i;
  }

  const resultArr = array.map((el) => comparedObj[String(el)]);

  console.log(resultArr.join(" "));
}
