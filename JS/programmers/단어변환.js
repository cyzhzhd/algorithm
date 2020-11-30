// https://programmers.co.kr/learn/courses/30/lessons/43163

const begin = 'hit';
const target = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(solution(begin, target, words));
function solution(begin, target, words) {
  words.unshift(begin);
  const size = words.length;
  const connectedList = new Array(size).fill(0).map(() => new Array());
  const isVisited = new Array(size).fill(false);

  const length = words[0].length;
  words.forEach((subject, idx) => {
    words.forEach((target) => {
      let count = 0;
      for (let i = 0; i < length; ++i) {
        if (subject[i] !== target[i]) count++;
      }
      if (count <= 1) {
        connectedList[idx].push(target);
      }
    });
  });

  //   console.log(connectedList);

  const queue = [[begin, 0]];
  isVisited[0] = true;
  let min = 100;
  while (queue.length) {
    const current = queue.shift();
    const val = current[0];
    const count = current[1];
    const index = words.findIndex((v) => v === val);

    // console.log(val, index);
    connectedList[index].forEach((word) => {
      const idx = words.findIndex((v) => v === word);
      if (!isVisited[idx]) {
        queue.push([words[idx], count + 1]);
        isVisited[idx] = true;
      }

      if (words[idx] === target) {
        min = min > count + 1 ? count + 1 : min;
      }
    });
  }

  return min === 100 ? 0 : min;
}
