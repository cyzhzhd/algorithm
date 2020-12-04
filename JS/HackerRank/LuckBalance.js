// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];
const k = 3;

function luckBalance(k, contests) {
  const important = [];
  const unimportant = [];

  contests.forEach((contest) => {
    if (contest[1] == 1) {
      important.push(contest[0]);
    } else {
      unimportant.push(contest[0]);
    }
  });

  important.sort((a, b) => b - a);
  const lose = important.slice(0, k);
  const win = important.slice(k);
  return (
    unimportant.reduce((acc, val) => acc + val, 0) +
    lose.reduce((acc, val) => acc + val, 0) -
    win.reduce((acc, val) => acc + val, 0)
  );
}
console.log(luckBalance(k, contests));
