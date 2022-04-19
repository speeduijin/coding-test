const { setDefaultResultOrder } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => +item);

solution(input[0], input[1]);

function p(el) {
  if (el === 1) {
    return false;
  } else if (el % 2 === 0) {
    if (el === 2) {
      return true;
    } else {
      return false;
    }
  } else {
    let isPrime = true;
    for (let i = 3; i <= el; i++) {
      if (el % i === 0) {
        if (el === i) {
          isPrime = true;
          break;
        } else {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      return true;
    } else {
      return false;
    }
  }
}

function solution(M, N) {
  const prime = [];

  for (let i = M; i <= N; i++) {
    if (p(i)) {
      prime.push(i);
    }
  }

  if (prime.length === 0) {
    console.log(-1);
  } else {
    const sum = prime.reduce((sum, el) => sum + el);
    const min = prime.reduce((min, el) => Math.min(min, el));
    console.log(sum);
    console.log(min);
  }
}
