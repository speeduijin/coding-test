const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [inputN, ...inputArr] = input;

solution(inputArr);

function solution(array) {
  const resultArray = array
    .filter((el, idx) => array.indexOf(el) === idx)
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      }
    });

  console.log(resultArray.join("\n"));
}
