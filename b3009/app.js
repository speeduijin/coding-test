const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const inputArr = [];
for (let i = 0; i < input.length; i++) {
  const el = input[i].split(" ").map((item) => +item);
  inputArr.push(el);
}

solution(inputArr);

function solution(arr) {
  const fourNum = (el) => {
    const init = arr[0];
    if (init[el] !== arr[1][el] && init[el] !== arr[2][el]) {
      return init[el];
    } else if (init[el] === arr[1][el]) {
      return arr[2][el];
    } else {
      return arr[1][el];
    }
  };

  const resultX = fourNum(0);
  const resultY = fourNum(1);

  console.log(`${resultX} ${resultY}`);
}
