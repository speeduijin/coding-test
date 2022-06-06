const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [inputN, ...inputArr] = input;

solution(inputN, inputArr);

function solution(N, array) {
  array.sort((a, b) => a - b);

  let avg = Math.round(array.reduce((acc, cur) => acc + cur) / N);
  if (avg === -0) {
    avg = 0;
  }

  const mid = array[Math.floor(N / 2)];

  const itemCnt = {};
  itemCnt[array[0]] = 1;
  for (let i = 1; i < N; i++) {
    if (itemCnt[array[i]]) {
      itemCnt[array[i]] += 1;
    } else {
      itemCnt[array[i]] = 1;
    }
  }

  const maxCnt = Math.max(...Object.values(itemCnt));
  const maxCntArray = Object.keys(itemCnt)
    .filter((key) => {
      if (itemCnt[key] === maxCnt) {
        return key;
      }
    })
    .map((item) => +item);

  let maxCntIdx = 0;
  if (maxCntArray.length > 1) {
    maxCntArray.sort((a, b) => a - b);
    maxCntIdx = maxCntArray[1];
  } else {
    maxCntIdx = maxCntArray[0];
  }

  const diff = array[N - 1] - array[0];
  console.log(`${avg}\n${mid}\n${maxCntIdx}\n${diff}`);
}
