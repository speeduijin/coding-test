const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const arr = [];

for (let i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  const testCase = { H: tempValue[0], W: tempValue[1], N: tempValue[2] };
  arr.push(testCase);
}

solution(+input[0], arr);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; i++) {
    const H = testCaseArray[i].H;
    const N = testCaseArray[i].N;

    let roomFloorNum;
    let roomCntNum;

    if (N % H !== 0) {
      roomFloorNum = N % H;
      roomCntNum = Math.ceil(N / H);
    } else {
      roomFloorNum = H;
      roomCntNum = N / H;
    }

    if (roomCntNum < 10) {
      console.log(`${roomFloorNum}0${roomCntNum}`);
    } else {
      console.log(`${roomFloorNum}${roomCntNum}`);
    }
  }
}
