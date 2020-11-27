// https://programmers.co.kr/learn/courses/30/lessons/42889

const n = 4;
const stages = [4, 4, 4, 4, 4];

console.log(solution(n, stages));

function solution(N, stages) {
  // 1. 스테이지별 도전자의 수
  const userInStage = new Array(N + 1).fill(0);
  stages.forEach((stage) => userInStage[stage]++);

  // 2. 실패율
  let failure = new Array(N + 1).fill(0);
  const denominator = new Array(N + 1);
  denominator[1] = stages.length;

  for (let i = 1; i < N + 1; ++i) {
    failure[i] = userInStage[i] / denominator[i];
    denominator[i + 1] = denominator[i] - userInStage[i];
  }
  failure.shift();
  failure = failure.map((val, idx) => (val = { idx: idx + 1, val }));
  console.log(failure);
  failure.sort((a, b) => b['val'] - a['val']);
  const order = [];
  failure.forEach((x) => order.push(x['idx']));
  return order;
}
