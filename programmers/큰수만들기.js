// https://programmers.co.kr/learn/courses/30/lessons/42883

// const number = ['4177252841', '1924', '1231234'];
// const number = '4177252841';
const number = '4177252841';
const k = 4;

console.log(solution(number, k));

function solution(number, k) {
  number = number.split('');
  let answer = [];
  let hasDone = false;
  let index = 0;
  while (!hasDone) {
    const val = number[index++];

    while (answer.length && val > answer[answer.length - 1] && k--) {
      answer.pop();
    }
    answer.push(val);
    if (k <= 0 || index >= number.length) {
      hasDone = true;
    }
  }

  if (k) answer.splice(answer.length - k, k);
  answer = answer.concat(number.filter((v, idx) => idx >= index));
  return answer.join('');
}

// function solution(number, k) {
//   number = number.split('');
//   let index = 0;
//   while (k--) {
//     while (
//       index < number.length &&
//       Number(number[index]) >= Number(number[index + 1])
//     ) {
//       index++;
//     }
//     if (index === number.length) {
//       number.splice(number.length - k + 1, k);
//       return number;
//     }
//     number.splice(index, 1);
//     index = index - 1 > 0 ? index - 1 : 0;
//   }
//   return number.join('');
// }

// function solution(number, k) {
//   while (k--) {
//     const candidate = [];
//     number = number.split('');
//     for (let i = 0; i < number.length; i += 1) {
//       const temp = Array.from(number);
//       temp.splice(i, 1);
//       candidate.push(
//         temp.reduce((acc, c) => acc.concat(c)),
//         ''
//       );
//     }
//     number = Math.max(...candidate).toString();
//   }
//   return number;
// }
