const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  let count = 0;
  const orderArray = [];

  const orderOfHanoi = (n, from, other, to) => {
    if (n === 0) {
      return;
    } else {
      orderOfHanoi(n - 1, from, to, other);
      count++;
      orderArray.push([from, to]);
      orderOfHanoi(n - 1, other, from, to);
    }
  };

  orderOfHanoi(N, "1", "2", "3");
  console.log(count);
  console.log(orderArray.map((items) => items.join(" ")).join("\n"));
}
