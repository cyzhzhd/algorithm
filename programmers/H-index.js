// https://programmers.co.kr/learn/courses/30/lessons/42747

const citations = [
  [3, 0, 6, 1, 5],
  [8, 8, 8],
  [88, 8, 8],
  [0, 2, 1],
];

citations.forEach((c) => console.log(solution(c)));

function solution(citations) {
  citations.sort((a, b) => b - a);
  let idx = 0;
  while (idx < citations[idx]) {
    idx++;
  }

  return idx;
}
