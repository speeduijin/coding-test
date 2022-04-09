const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(str) {
  const cntArray = Array(26).fill(0);

  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < 26; ++j) {
      if (str[i] === String.fromCharCode(j + 65)) {
        cntArray[j]++;
      }
      if (str[i] === String.fromCharCode(j + 97)) {
        cntArray[j]++;
      }
    }
  }
  const maxCnt = Math.max(...cntArray);
  const maxCntWord = String.fromCharCode(cntArray.indexOf(maxCnt) + 65);
  let maxSameCnt = 0;
  for (let i = 0; i < 26; ++i) {
    if (cntArray[i] === maxCnt) {
      maxSameCnt++;
    }
  }
  if (maxSameCnt === 1) {
    console.log(maxCntWord);
  }
  if (maxSameCnt > 1) {
    console.log("?");
  }
}
