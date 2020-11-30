// https://programmers.co.kr/learn/courses/30/lessons/60063

const board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

console.log(solution(board));

function solution(board) {
  const size = board.length;
  board.unshift(new Array(size).fill(1));
  board.push(new Array(size).fill(1));
  board.forEach((row) => {
    row.unshift(1);
    row.push(1);
  });
  return BFS(board);
}

function BFS(board) {
  const size = board.length;
  const hasVisited = [];

  const queue = [];
  queue.push([1, 1, 1, 2, 0]);
  hasVisited.push([1, 1, 1, 2]);
  while (queue.length) {
    const location = queue.shift();
    const candidates = move(board, location);

    candidates.forEach((candidate) => {
      if (candidate[0] === size && candidate[1] === size)
        return location[4] + 1;
      if (candidate[2] === size && candidate[3] === size)
        return location[4] + 1;

      if (
        hasVisited.every((site) => {
          if (
            site[0] === candidate[0] &&
            site[1] === candidate[1] &&
            site[2] === candidate[2] &&
            site[3] === candidate[3]
          )
            return false;
          return true;
        })
      ) {
        if (
          hasVisited.every((site) => {
            if (
              site[0] === candidate[2] &&
              site[1] === candidate[3] &&
              site[2] === candidate[0] &&
              site[3] === candidate[1]
            )
              return false;
            return true;
          })
        ) {
          queue.push([
            candidate[0],
            candidate[1],
            candidate[2],
            candidate[3],
            location[4] + 1,
          ]);
          hasVisited.push([
            candidate[0],
            candidate[1],
            candidate[2],
            candidate[3],
          ]);
        }
      }
    });
  }
}

function move(board, location) {
  const candidates = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const x1 = location[0];
  const y1 = location[1];
  const x2 = location[2];
  const y2 = location[3];
  const distance = location[4];

  console.log(location);
  // 이동
  for (let i = 0; i < 4; ++i) {
    if (board[x1 + dx[i]][y1 + dy[i]] || board[x2 + dx[i]][y2 + dy[i]])
      continue;
    candidates.push([
      x1 + dx[i],
      y1 + dy[i],
      x2 + dx[i],
      y2 + dy[i],
      distance + 1,
    ]);
  }

  // 회전
  const dr = [1, -1];
  if (x1 === x2) {
    // 평행 상태
    for (const r of dr) {
      if (board[x1 + r][y1] || board[x2 + r][y2]) continue;
      candidates.push([x1, y1, x1, y1 + r, distance + 1]);
      candidates.push([x2, y2, x2, y2 + r, distance + 1]);
    }
  } else {
    // 수직 상태
    for (const r of dr) {
      if (board[x1][y1 + r] || board[x2][y2 + r]) continue;
      candidates.push([x1, y1, x1 + r, y1, distance + 1]);
      candidates.push([x2, y2, x2 + r, y2, distance + 1]);
    }
  }
  return candidates;
}
