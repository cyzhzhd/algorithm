// https://programmers.co.kr/learn/courses/30/lessons/67259

const board = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];

console.log(solution(board));

function solution(board) {
  // 초기 세팅
  const size = board.length;
  const hasVistied = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(false));
  const hasCompleted = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(false));
  const cost = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(Number.MAX_SAFE_INTEGER));
  const hasOtherRoute = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(false));
  hasVistied[0][0] = true;
  cost[0][0] = 0;
  //  right, down, left, up
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  // 0,0 에서는 방향을 가지고 있지 않음.
  // 0 = right, 1 = down, 2 = left, 3= up
  let location = [0, 0];
  const queue = [];
  if (!board[0][1]) {
    queue.push([0, 1, 0]);
    hasVistied[0][1] = true;
    cost[0][1] = 100;
  }

  if (!board[1][0]) {
    queue.push([1, 0, 1]);
    hasVistied[1][0] = true;
    cost[1][0] = 100;
  }
  hasCompleted[0][0] = true;

  // 루트 보기
  const route = new Array(size).fill(0).map(() => new Array(size));
  route[0][1] = [[0, 0, 0, 0, 100]];
  route[1][0] = [[0, 0, 1, 1, 100]];
  while (!hasArrived(location, size)) {
    location = nextLocation(queue, hasCompleted, cost, hasOtherRoute);
    const x = location[0];
    const y = location[1];
    const dir = location[2];
    // console.log(route[x][y]);
    for (let i = 0; i < 4; ++i) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      if (!(0 <= newX && newX < size && 0 <= newY && newY < size)) continue;
      if (board[newX][newY]) continue;

      if (!hasVistied[newX][newY]) {
        hasVistied[newX][newY] = true;
        queue.push([newX, newY, i]);
      }

      if (dir === i) {
        if (cost[newX][newY] > cost[x][y] + 100) {
          cost[newX][newY] = cost[x][y] + 100;
        } else if (cost[newX][newY] === cost[x][y] + 100) {
          hasOtherRoute[newX][newY] = true;
          queue.push([newX, newY, i]);
        }
        route[newX][newY] = [...route[x][y], [x, y, dir, i, 100]];
      } else {
        if (cost[newX][newY] > cost[x][y] + 600) {
          cost[newX][newY] = cost[x][y] + 600;
        } else if (cost[newX][newY] === cost[x][y] + 600) {
          hasOtherRoute[newX][newY] = true;
          queue.push([newX, newY, i]);
        }
        route[newX][newY] = [...route[x][y], [x, y, dir, i, 600]];
      }
    }
    if (!hasOtherRoute) hasCompleted[x][y] = true;
  }

  //   console.log(route[size - 1][size - 1]);
  return cost[size - 1][size - 1];
}
function nextLocation(queue, hasCompleted, cost, hasOtherRoute) {
  let min = Number.MAX_SAFE_INTEGER;
  let loc;
  let index;
  queue.forEach((location, idx) => {
    if (
      (hasOtherRoute[location[0]][hasOtherRoute[1]] ||
        !hasCompleted[location[0]][location[1]]) &&
      cost[location[0]][location[1]] < min
    ) {
      min = cost[location[0]][location[1]];
      index = idx;
      loc = [...location];
    }
  });

  queue.splice(index, 1);
  return loc;
}

function hasArrived(location, size) {
  if (location[0] === size - 1 && location[1] === size - 1) return true;
  return false;
}
