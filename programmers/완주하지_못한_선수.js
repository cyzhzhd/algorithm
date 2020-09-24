// https://programmers.co.kr/learn/courses/30/lessons/42576

// 정렬했을 때 처음으로 다른 부분이 완주하지 못한 선수.

const participant = [
  'marina',
  'vinko',
  'josipa',
  'nikola',
  'vinko',
  'filipa',
  'vinko',
];
const completion = ['josipa', 'vinko', 'filipa', 'vinko', 'marina', 'nikola'];

participant.sort();
completion.sort();

let answer;
for (let i = 0; i < participant.length; ++i) {
  if (participant[i] !== completion[i]) {
    answer = participant[i];
  }
}

console.log(answer);

// function solution(participant, completion) {
//   var dic = completion.reduce(temp, {});
//   console.log('dic = ', dic);
//   return participant.find((t) => {
//     if (dic[t]) dic[t] = dic[t] - 1;
//     else return true;
//   });
// }

// function temp(obj, t) {
//   return (obj[t] = obj[t] ? obj[t] + 1 : 1), obj;
// }

// console.log(solution(participant, completion));
