// https://programmers.co.kr/learn/courses/30/lessons/49994

const dirs = 'UUUUDDDD';
console.log(solution(dirs));

function solution(ori_dirs) {
  const dirs = ori_dirs.split('');
  const mySet = new Set();
  const move = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const location = [5, 5];
  let count = 0;
  while (dirs.length) {
    const next_move = dirs.shift();
    const x = location[0];
    const y = location[1];
    const newX = location[0] + move[next_move][0];
    const newY = location[1] + move[next_move][1];
    if (0 <= newX && newX <= 10 && 0 <= newY && newY <= 10) {
      if (!mySet.has(`5${newX}5${newY}5${x}5${y}`)) {
        mySet.add(`5${x}5${y}5${newX}5${newY}`);
      }
      location[0] = newX;
      location[1] = newY;
    }
  }

  return mySet.size;
}
