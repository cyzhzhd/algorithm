// https://programmers.co.kr/learn/courses/30/lessons/42587

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

console.log(solution(priorities, location));

function solution(priorities, location) {
  let hasFinished = false;
  let count = 0;
  while (!hasFinished) {
    // 출력할 수 있을 때까지 shift and push
    const max = Math.max(...priorities);
    const index = priorities.indexOf(max);
    for (let i = 0; i < index; ++i) {
      const item = priorities.shift();
      priorities.push(item);
    }
    priorities.shift();
    count++;
    location -= index;

    if (location === 0) hasFinished = true;
    else if (location > 0) location -= 1;
    else location += priorities.length;
  }
  return count;
}
