const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArray = [];
const [inputN, inputM] = input[0].split(" ").map((item) => +item);
const inputItems = input[1].split(" ").map((item) => +item);
inputArray.push(...inputItems);

solution(inputN, inputM, inputArray);

function solution(N, M, array) {
  const sumArray = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = array[i] + array[j] + array[k];
        if (sum <= M) {
          sumArray.push(sum);
        }
      }
    }
  }

  const result = Math.max(...sumArray);
  console.log(result);
}
