const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));

const [, ...tempArr] = input;
const inputArr = tempArr.map((el) => {
  const obj = {};
  obj.command = el[0];
  if (el[0] === "push") {
    obj.num = +el[1];
  }
  return obj;
});

solution(inputArr);

function solution(commandArr) {
  const excuteArr = [];
  const stackArr = [];

  commandArr.forEach((el) => {
    const top = stackArr.length - 1;
    if (el.command === "push") {
      stackArr.push(el.num);
    }
    if (el.command === "pop") {
      let popNumber = 0;
      if (stackArr.length === 0) {
        popNumber = -1;
      } else {
        popNumber = stackArr[top];
        stackArr.pop(stackArr[top]);
      }
      excuteArr.push(popNumber);
    }
    if (el.command === "size") {
      excuteArr.push(stackArr.length);
    }
    if (el.command === "empty") {
      if (stackArr.length === 0) {
        excuteArr.push(1);
      } else {
        excuteArr.push(0);
      }
    }
    if (el.command === "top") {
      if (stackArr.length === 0) {
        excuteArr.push(-1);
      } else {
        excuteArr.push(stackArr[top]);
      }
    }
  });
  console.log(excuteArr.join("\n"));
}
