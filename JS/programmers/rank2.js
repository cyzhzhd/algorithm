// https://programmers.co.kr/learn/courses/30/lessons/49191

// 승리 1, 패배 1, 모름 0

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
  //   [1, 5],
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
  const board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let count = 0;

  results.forEach((result) => {
    const winner = result[0] - 1;
    const loser = result[1] - 1;
    board[winner][loser] = 1;
    board[loser][winner] = -1;
  });

  board.forEach((row) => {
    const loses = row.map((v, idx) => (v === -1 ? idx : 0)).filter((v) => v);
    row.forEach((match, loser) => {
      if (match === 1) {
        loses.forEach((lose) => (board[loser][lose] = -1));
      }
    });

    row.filter((v) => v !== 0).length === n - 1 ? count++ : 0;
  });

  console.log(board);
  return count;
}
