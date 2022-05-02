const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const inputArray = [];
const [inputN, inputM] = input[0].split(" ").map((item) => +item);
const inputItems = input[1].split(" ").map((item) => +item);
inputArray.push(...inputItems);

solution(inputN, inputM, inputArray);

function solution(N, M, array) {}
