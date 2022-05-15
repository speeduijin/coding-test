const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const countPeople = +input[0];
const inputArray = [];
for (let i = 1; i <= countPeople; i++) {
  const inputItem = input[i].split(" ").map((item) => +item);
  inputArray.push(inputItem);
}

solution(countPeople, inputArray);

function solution(N, array) {
  const gradeArray = [];

  for (let i = 0; i < N; i++) {
    let tempCount = 1;
    const curInfo = array[i];

    for (let j = 0; j < N; j++) {
      const info = array[j];

      if (curInfo[0] < info[0] && curInfo[1] < info[1]) {
        tempCount++;
      }
    }
    gradeArray.push(tempCount);
  }

  console.log(...gradeArray);
}
