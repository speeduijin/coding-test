const fs = require("fs");
const { get } = require("http");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

solution();

function solution(N, arr) {}
