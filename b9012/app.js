const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, ...tempArr] = input;
const inputArr = tempArr.map((item) => item.trim());

solution(inputArr);

function solution(array) {
  let resultArr = [];

  array.forEach((el) => {
    const stackArr = [];
    let testNum = 0;

    for (let i = 0; i < el.length; i++) {
      stackArr.push(el[i]);
      if (stackArr[stackArr.length - 1] === "(") {
        testNum += 1;
      } else {
        testNum -= 1;
      }

      if (testNum === -1) {
        resultArr.push("NO");
        return;
      }
    }
    if (testNum === 0) {
      resultArr.push("YES");
    } else {
      resultArr.push("NO");
    }
  });

  console.log(resultArr.join("\n"));
}
