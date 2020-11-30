// https://programmers.co.kr/learn/courses/30/lessons/42586

// 남은 일수를 계산하여, 남은 일수가 자기보다 큰 작업이 나올때 까지 count++하고
// 남은 일수가 더 많은 작업이 나오면 count를 다시 초기화.

// const progresses = [10, 12, 4, 1];
// const speeds = [4, 4, 100, 2];
const progresses = [93, 30, 55, 0, 0, 93];
const speeds = [1, 30, 5, 20, 10, 1];

function solution(progresses, speeds) {
  // 각 업무 별 완성되기까지의 시간 계산
  let daysLeft = [];
  for (let i = 0; i < progresses.length; ++i) {
    const dayLeft = Math.ceil((100 - progresses[i]) / speeds[i]);
    daysLeft.push(dayLeft);
  }
  console.log(daysLeft);

  const answer = [];
  let count = 0;
  let max = daysLeft[0];
  for (let i = 0; i < daysLeft.length; ++i) {
    if (max >= daysLeft[i]) {
      count++;
    } else {
      max = daysLeft[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution(progresses, speeds));
