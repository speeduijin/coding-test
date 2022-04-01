const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputN = +input[0];
const inputArray = input[1].split(" ").map((item) => +item);

solution(inputN, inputArray);

function solution(N, Array) {
  let maxN = -1000001;
  let minN = 1000001;
  for (let i = 0; i < N; i++) {
    if (Array[i] > maxN) maxN = Array[i];

    if (Array[i] < minN) minN = Array[i];
  }
  console.log(`${minN} ${maxN}`);
}
