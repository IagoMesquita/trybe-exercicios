const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const actionRepeat = action(rightAnswers[i], studentAnswers[i]);
    contador += actionRepeat;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswers, uAnswers) => {
if (rAnswers === uAnswers) {
return 1;
} if (uAnswers === 'N.A') {
return 0;
}
return -0.5;
}));
