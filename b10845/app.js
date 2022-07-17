const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [cmdNum, ...cmdArr] = input;

solution(+cmdNum, cmdArr);

function solution(N, cmds) {
  const answer = [];

  const que = [];

  for (let i = 0; i < N; i++) {
    let [cmd, num] = cmds[i].trim().split(" ");
    num = parseInt(num);

    if (cmd === "push") {
      que.push(num);
    } else if (cmd === "pop") {
      que.length > 0 ? answer.push(que.shift()) : answer.push(-1);
    } else if (cmd === "size") {
      answer.push(que.length);
    } else if (cmd === "empty") {
      que.length === 0 ? answer.push(1) : answer.push(0);
    } else if (cmd === "front") {
      que.length > 0 ? answer.push(que[0]) : answer.push(-1);
    } else if (cmd === "back") {
      que.length > 0 ? answer.push(que[que.length - 1]) : answer.push(-1);
    }
  }
  console.log(answer.join("\n"));
}
