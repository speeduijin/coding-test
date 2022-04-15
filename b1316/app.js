const fs = require("fs");
const { get } = require("http");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], input.slice(1));

function solution(N, arr) {
  let cnt = 0;
  for (let i = 0; i < N; ++i) {
    const str = arr[i];

    const obj = {};
    obj[str[0]] = true;
    let preStr = str[0];

    let isNotGroupWord = true;
    for (let j = 1; j < str.length; ++j) {
      const nowStr = str[j];

      if (nowStr !== preStr) {
        if (obj[nowStr]) {
          isNotGroupWord = false;
        } else {
          obj[nowStr] = true;
          preStr = nowStr;
        }
      }
    }
    if (isNotGroupWord) {
      cnt++;
    }
  }
  console.log(cnt);
}
