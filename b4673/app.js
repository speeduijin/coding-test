solution();

function d(el) {
  const str = String(el);
  let idxSum = 0;

  for (let i = 0; i < str.length; i++) {
    idxSum += +str[i];
  }
  return el + idxSum;
}

function solution() {
  // Write your code
  const tempArr = Array(10001).fill(0);

  for (let i = 1; i <= 10000; i++) {
    const notSefNum = d(i);

    if (notSefNum < 10000) {
      tempArr[notSefNum]++;
    }
  }

  for (let i = 1; i < 10000; i++) {
    if (tempArr[i] === 0) {
      console.log(i);
    }
  }
}
