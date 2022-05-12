const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let newM = 0;
  let resultM = 0;

  for (let i = 1; ; i++) {
    newM = i;
    const strM = String(newM);
    const strArray = [...strM];
    const sumArray = strArray.map((el) => +el).reduce((acc, cur) => acc + cur);
    resultM = sumArray + newM;
    if (resultM === N) {
      break;
    } else if (newM > N) {
      newM = 0;
      break;
    }
  }
  console.log(newM);
}
