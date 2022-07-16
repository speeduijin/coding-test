const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [strN, cmdNum, ...cmdArr] = input;

solution(strN, +cmdNum, cmdArr);

//  시간초과 => splice X
function solution(N, M, cmdArr) {
  const leftStack = [...N];
  const rightStack = [];

  for (let i = 0; i < M; i++) {
    const [cmd, value] = cmdArr[i].trim().split(" ");
    if (cmd === "P") {
      leftStack.push(value);
    } else if (cmd === "B") {
      leftStack.pop();
    } else if (cmd === "L" && leftStack.length > 0) {
      rightStack.push(leftStack.pop());
    } else if (cmd === "D" && rightStack.length > 0) {
      leftStack.push(rightStack.pop());
    }
  }

  const answer = [...leftStack, ...rightStack.reverse()];
  console.log(answer.join(""));
}
