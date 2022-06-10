const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [inputN, ...inputArr] = input;
const nArr = inputArr.map((el, index) => {
  return {
    age: +el.split(" ")[0],
    name: el.split(" ")[1],
    order: index,
  };
});
solution(nArr);

function solution(array) {
  array.sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    } else {
      return a.order - b.order;
    }
  });

  const result = array.map((el) => `${el.age} ${el.name}`);
  console.log(result.join("\n"));
}
