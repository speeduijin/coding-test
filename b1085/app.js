const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => +item);

const inputObj = { x: input[0], y: input[1], w: input[2], h: input[3] };

solution(inputObj);

function solution(obj) {
  const xToZero = obj.x;
  const yToZero = obj.y;
  const wToX = obj.w - obj.x;
  const hToY = obj.h - obj.y;

  const diffArr = [xToZero, yToZero, wToX, hToY];

  const min = Math.min(...diffArr);

  console.log(min);
}
