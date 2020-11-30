// https://programmers.co.kr/learn/courses/30/lessons/49191

// 자신의 순위를 알려면 진 수 = n - k - 1이 되야한다.
// 이긴 사람의 수 + 진 사람의 수 - 1(자기 자신) = 총 인원 수
// n = 플레이어의 수, k = 플레이어 x가 이긴 플레이어의 수

const n = 5;
// const results = [
//   [4, 3],
//   [4, 2],
//   [3, 2],
//   [1, 2],
//   [2, 5],
// ];
const results = [
  [1, 4],
  [1, 5],
  [2, 1],
  [2, 3],
  [2, 4],
  [2, 5],
  [3, 1],
  [3, 4],
  [3, 5],
  [5, 4],
];
console.log(solution(n, results));

function solution(n, results) {
  const size = n + 1;
  const playerWithRank = [];
  const connectedList = new Array(size).fill(0).map(() => new Array());
  results.forEach((result) => {
    const from = result[0];
    const to = result[1];
    connectedList[from].push(to);
  });

  const targets = [...Array(size).keys()];
  targets.shift();
  getRank(connectedList, playerWithRank, [targets], size);

  return playerWithRank.length;
}

function getRank(connectedList, playerWithRank, targets, size) {
  if (!targets.length) return;
  targets.forEach((target) => {
    const count = new Array(size).fill(0);
    target.forEach((t) => {
      connectedList[t].forEach((node) => count[node]++);
    });

    const n = target.length;
    const newTarget = [];
    target.forEach((val) => {
      const k = connectedList[val].length;
      if (count[val] === n - k - 1 && !playerWithRank.includes(val)) {
        newTarget.push([...connectedList[val]]);
        playerWithRank.push(val);
      }
    });
    getRank(connectedList, playerWithRank, newTarget, size);
  });
}
