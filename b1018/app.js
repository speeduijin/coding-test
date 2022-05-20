const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [inputN, inputM] = input[0].split(" ").map((item) => +item);
const inputArray = [];

for (let i = 1; i <= inputN; i++) {
  inputArray.push(input[i]);
}

solution(inputN, inputM, inputArray);

function solution(N, M, array) {
  const paintCountArray = [];
  const whiteFirst = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const blackFirst = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  const paintCount = (array, color, h, w) => {
    let count = 0;
    for (let i = h; i < h + 8; i++) {
      for (let j = w; j < w + 8; j++) {
        if (array[i][j] !== color[i - h][j - w]) {
          count++;
        }
      }
    }
    paintCountArray.push(count);
  };

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let height = i;
      let width = j;
      paintCount(array, whiteFirst, height, width);
      paintCount(array, blackFirst, height, width);
    }
  }

  console.log(Math.min(...paintCountArray));
}
