const n = 10;

console.log(solution(n));

function solution(n) {
  if (n < 10) {
    return [0, n];
  }
  const answer = [];
  const queue = [];
  const hasVisited = new Array(100000000);
  queue.push([0, n.toString()]);

  while (queue.length) {
    const target = queue.shift();
    const count = target[0];
    const num = target[1];
    const length = num.length;
    for (let i = 1; i < length; ++i) {
      const front = num.slice(0, i);
      const back = num.slice(i);
      if (back[0] === '0') {
        if (back === '0') {
        } else {
          continue;
        }
      }
      const newVal = (Number(front) + Number(back)).toString();
      if (newVal.length === 1) {
        answer.push([count + 1, newVal]);
      } else {
        if (hasVisited[Number(newVal)]) continue;
        queue.push([count + 1, newVal]);
        hasVisited[Number(newVal)] = 1;
      }
    }
  }
  answer.sort((a, b) => a[0] - b[0]);

  return [answer[0][0], Number(answer[0][1])];
}
