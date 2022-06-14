const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, ...tempArr] = input;
const inputArr = tempArr.map((item) => item.trim());

solution();

function solution() {}
