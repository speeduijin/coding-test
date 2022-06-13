const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, ...inputArr] = input;

solution(inputArr);

function solution(sentenceArr) {
  const lineArr = sentenceArr.map((el) => {
    const line = el.trim().split(" ");
    const reverseWord = line.map((el) => {
      const reverseItem = el.split("").reverse();
      return reverseItem.join("");
    });
    return reverseWord.join(" ");
  });
  console.log(lineArr.join("\n"));
}
