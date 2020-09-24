// https://programmers.co.kr/learn/courses/30/lessons/49189

// 1. 가중치가 있었다면 다이직스트라의 최단거리 알고리즘으로 풀었겠지만,
// 2. 가중치가 모두 1이니 BFS or DFS로도 충분히 풀 수 있음.
// 3. 아니면 그냥 노드 별로 하나씩 가기만 해도 충분히 풀 수 있지만 2번으로 풀 예정

// 왜 DFS로는 답이 안나오지?

const n = 9;
const vertex = [
  [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [1, 4],
    [1, 5],
    [2, 4],
    [5, 2],
  ],
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
  [
    [1, 2],
    [1, 3],
    [3, 6],
    [2, 4],
    [2, 5],
    [4, 7],
    [5, 8],
    [7, 8],
    [8, 9],
  ],
];
vertex.forEach((v) => console.log(solution(n, v)));

function solution(n, edges) {
  const connectedList = getConnectedList(n, edges);
  const isVistied = new Array(n + 1).fill(false);
  const minDistance = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const queue = new Array();

  queue.push(1);
  minDistance[0] = 0;
  minDistance[1] = 0;
  isVistied[1] = true;
  while (queue.length) {
    const from = queue.shift();
    connectedList[from].forEach((to) => {
      if (!isVistied[to]) {
        queue.push(to);
        isVistied[to] = true;
      }

      minDistance[to] =
        minDistance[to] > minDistance[from] + 1
          ? minDistance[from] + 1
          : minDistance[to];
    });
  }
  const max = Math.max(...minDistance);
  const answer = minDistance.filter((d) => d === max);

  return answer.length;
}

function getConnectedList(n, edges) {
  const connectedList = new Array(n + 1).fill(0).map((x) => new Array(0));

  edges.forEach((edge) => {
    connectedList[edge[0]].push(edge[1]);
    connectedList[edge[1]].push(edge[0]);
  });
  return connectedList;
}
