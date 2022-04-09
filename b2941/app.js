const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(input);

function solution(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; ++i) {
    for (let j = 97; j <= 122; ++j) {
      if (str[i] === String.fromCharCode(j)) {
        cnt++;
      }
    }
    if (str[i] === "d" && str[i + 1] === "z" && str[i + 2] === "=") {
      cnt--;
    }
    if (str[i] === "l" && str[i + 1] === "j") {
      cnt--;
    }
    if (str[i] === "n" && str[i + 1] === "j") {
      cnt--;
    }
  }
  console.log(cnt);
}
