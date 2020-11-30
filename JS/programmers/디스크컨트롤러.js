// https://programmers.co.kr/learn/courses/30/lessons/42627

const jobs = [
  [0, 1],
  [0, 1],
  [1, 0],
];

function solution(jobs) {
  const length = jobs.length;
  const disk = [];
  let time = 0;
  let finishingTime = 0;
  let totalWaitedTime = 0;
  while (disk.length || jobs.length) {
    while (jobs.length && jobs[0][0] <= time) {
      const item = jobs.shift();
      disk.push([item[1], item[0]]);
    }
    disk.sort((a, b) => a[0] - b[0]);
    if (disk.length) {
      const item = disk.shift();
      finishingTime = time + item[0];
      totalWaitedTime += finishingTime - item[1];
      time = finishingTime;
    } else {
      time = jobs[0][0];
    }
  }
  return Math.floor(totalWaitedTime / length);
}

console.log(solution(jobs));
