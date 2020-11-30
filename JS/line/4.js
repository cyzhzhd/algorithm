const maze = [
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
];

console.log(solution(maze));

function solution(maze) {
  const size = maze.length;
  createEdgeOfMaze(maze);
  //   console.log(maze);

  // up = 0, left = 1, down = 2, right =3;
  let p = [1, 1];
  let dir;
  const move = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const check = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  if (maze[1][2] === 1) {
    dir = 2;
  } else {
    dir = 3;
  }

  let count = 0;
  while (!(p[0] === size && p[1] === size)) {
    const checkX = p[0] + check[dir][0];
    const checkY = p[1] + check[dir][1];
    let moveX = p[0] + move[dir][0];
    let moveY = p[1] + move[dir][1];
    if (maze[checkX][checkY]) {
      // 왼쪽에 벽이 있다면 앞으로 전진
      // 왼쪽에 벽이 있지만 앞에도 벽이 있다면 회전
      while (maze[moveX][moveY] === 1) {
        const newDir = dir - 1;
        if (newDir === -1) {
          dir = 3;
        } else {
          dir = newDir;
        }

        moveX = p[0] + move[dir][0];
        moveY = p[1] + move[dir][1];
      }
    } else {
      // 왼쪽에 벽이 없다면 -90도 회전
      dir = (dir + 1) % 4;
    }

    p[0] += move[dir][0];
    p[1] += move[dir][1];
    // console.log(p);
    count++;
  }

  return count;
}

function createEdgeOfMaze(maze) {
  maze.forEach((row) => {
    row.unshift(1);
    row.push(1);
  });
  const block = new Array(maze.length + 2).fill(1);
  maze.unshift(block);
  maze.push(block);
}
