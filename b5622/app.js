const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(input);

function solution(str) {
  //   let time = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    // if (str[i] === "A" || str[i] === "B" || str[i] === "C") {
    //   time += 3;
    // } else if (str[i] === "D" || str[i] === "E" || str[i] === "F") {
    //   time += 4;
    // } else if (str[i] === "G" || str[i] === "H" || str[i] === "I") {
    //   time += 5;
    // } else if (str[i] === "J" || str[i] === "K" || str[i] === "L") {
    //   time += 6;
    // } else if (str[i] === "M" || str[i] === "N" || str[i] === "O") {
    //   time += 7;
    // } else if (
    //   str[i] === "P" ||
    //   str[i] === "Q" ||
    //   str[i] === "R" ||
    //   str[i] === "S"
    // ) {
    //   time += 8;
    // } else if (str[i] === "T" || str[i] === "U" || str[i] === "V") {
    //   time += 9;
    // } else if (
    //   str[i] === "W" ||
    //   str[i] === "X" ||
    //   str[i] === "Y" ||
    //   str[i] === "Z"
    // ) {
    //   time += 10;
    let s = str[i];
    if (s >= "W") {
      result += 10;
    } else if (s >= "T") {
      result += 9;
    } else if (s >= "P") {
      result += 8;
    } else if (s >= "M") {
      result += 7;
    } else if (s >= "J") {
      result += 6;
    } else if (s >= "G") {
      result += 5;
    } else if (s >= "D") {
      result += 4;
    } else if (s >= "A") {
      result += 3;
    }
  }
  console.log(result);
}
