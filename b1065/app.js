const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function h(X) {
  const str = String(X);
  let ans = true;
  if (str.length < 3) {
    return true;
  } else {
    for (let i = 2; i < str.length; i++) {
      const diff = +str[1] - +str[0];
      let beforeNum = +str[1];

      //   if (+str[i] - +str[i - 1] !== diff) {
      if (+str[i] - beforeNum !== diff) {
        return false;
      }
      beforeNum = +str[i];
    }
    return true;
  }
}

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (h(i)) {
      cnt++;
    }
  }
  console.log(cnt);
}
