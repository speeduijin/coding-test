const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(N) {
  const underbar = "____";
  let underbarSum = "";

  const recursion = (n) => {
    const question = `"재귀함수가 뭔가요?"`;
    const answerArray = [
      `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
      `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,
      `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
    ];

    const finalAnswer = `"재귀함수는 자기 자신을 호출하는 함수라네"`;

    console.log(`${underbarSum}${question}`);
    if (n === 0) {
      console.log(`${underbarSum}${finalAnswer}`);
      return;
    } else {
      answerArray.forEach((line) => console.log(`${underbarSum}${line}`));
      underbarSum += underbar;

      recursion(n - 1);
    }
  };

  console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
  recursion(N);
  for (let i = N; i >= 0; i--) {
    if (i === 0) {
      console.log(`라고 답변하였지.`);
    } else {
      console.log(`${underbarSum}라고 답변하였지.`);
      underbarSum = underbarSum.slice(4);
    }
  }
}
