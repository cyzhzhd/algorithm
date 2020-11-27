// https://programmers.co.kr/learn/courses/30/lessons/60062

const n = 200;
const weak = [0, 100];
const dist = [1, 1];
// const n = 200;
// const weak = [0, 10, 50, 80, 120, 160];
// const dist = [1, 5, 10, 30, 40];

let min = 8;
function solution(n, weak, dist) {
  recursion(n, weak, dist, 0);
  if (min === 8) return -1;
  return min;
}
console.log(solution(n, weak, dist));

function recursion(n, weaks, dists, count) {
  if (count >= min) {
    return;
  }
  if (!weaks.length) {
    min = min > count ? count : min;
    return;
  }
  if (!dists.length) {
    return;
  }
  const range = dists.pop();

  weaks.forEach((startingPoint) => {
    const tempWeaks = fixClockwise(n, startingPoint, range, [...weaks]);
    recursion(n, [...tempWeaks], [...dists], count + 1);
  });
}

function fixClockwise(n, startingPoint, range, weaks) {
  const coverage = startingPoint + range;
  if (coverage < n) {
    return weaks.filter((weak) => {
      if (startingPoint <= weak && weak <= coverage) return false;
      return true;
    });
  } else {
    const left = coverage - n;
    return weaks.filter((weak) => {
      const condition1 = startingPoint <= weak && weak <= n;
      const condition2 = 0 <= weak && weak <= left;
      if (condition1 || condition2) return false;
      return true;
    });
  }
}
