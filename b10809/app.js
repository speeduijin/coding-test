const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(input);

function solution(S) {
  const result = Array(26).fill(-1);
  //a ~ Z 는 아스키코드 97 ~ 122
  for (let i = 97; i <= 122; ++i) {
    result[i - 97] = S.indexOf(String.fromCharCode(i));
  }
  console.log(result.join(" "));
}
