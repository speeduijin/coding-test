const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const array = [];
for (let i = 1; i <= input[0]; ++i) {
  // const [R, S] = input[i].split(" ");
  const inputRS = input[i].split(" ");
  // array.push([R, S]);
  array.push({ R: +inputRS[0], S: inputRS[1] });
}

solution(+input[0], array);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; ++i) {
    const { R, S } = testCaseArray[i];

    let print = "";
    for (let j = 0; j < S.length; ++j) {
      print += S[j].repeat(R);
      // for (let k = 0; k < R; ++k) {
      //   print += S[j];
      // }
    }
    console.log(print);
  }
}
