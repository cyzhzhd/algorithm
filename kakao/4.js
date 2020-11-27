const n = 3;
const s = 1;
const a = 2;
const b = 3;

const fares = [
  [1, 2, 10],
  [1, 3, 3],
  [2, 3, 5],
];

console.log(solution(n, s, a, b, fares));

function solution(n, s, a, b, input_fares) {
  const fares = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(-1));
  input_fares.forEach((fare) => {
    const from = fare[0];
    const to = fare[1];
    const price = fare[2];

    fares[from][to] = price;
    fares[to][from] = price;
  });

  // 각 지점에서 A, B까지의 최단거리를 구함
  const shortestPathA = [Number.MAX_SAFE_INTEGER];
  const shortestPathB = [Number.MAX_SAFE_INTEGER];
  let shortestPathFromStarting = [];
  for (let i = 1; i < n + 1; ++i) {
    const hasVisited = new Array(n + 1).fill(false);
    const hasCompleted = new Array(n + 1).fill(false);
    const minCosts = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    const queue = [];
    queue.push(i);
    minCosts[i] = 0;
    hasVisited[i] = true;

    while (queue.length) {
      const node = nextNode(queue, hasCompleted, minCosts);
      queue.splice(queue.indexOf(node), 1);
      //   console.log(fares[node]);
      fares[node].forEach((connectedNodes, idx) => {
        if (connectedNodes > 0 && !hasVisited[idx]) {
          queue.push(idx);
          hasVisited[idx] = true;
        }
        if (connectedNodes > 0) {
          minCosts[idx] =
            minCosts[idx] > minCosts[node] + connectedNodes
              ? minCosts[node] + connectedNodes
              : minCosts[idx];
        }
      });

      hasCompleted[node] = true;
    }

    if (0 <= minCosts[a] && minCosts[a] < Number.MAX_SAFE_INTEGER)
      shortestPathA.push(minCosts[a]);
    else {
      shortestPathA.push(Number.MAX_SAFE_INTEGER);
    }
    if (0 <= minCosts[b] && minCosts[b] < Number.MAX_SAFE_INTEGER)
      shortestPathB.push(minCosts[b]);
    else {
      shortestPathB.push(Number.MAX_SAFE_INTEGER);
    }

    if (i === s) {
      shortestPathFromStarting = minCosts;
    }
  }
  console.log(shortestPathA);
  console.log(shortestPathB);
  console.log(shortestPathFromStarting);

  // 출발 지점에서 함께 움직일 때
  let min = 100000000;
  for (let i = 1; i < n + 1; ++i) {
    const compareVal =
      shortestPathFromStarting[i] + shortestPathA[i] + shortestPathB[i];

    if (min > compareVal) {
      min = compareVal;
      console.log(
        'values',
        shortestPathFromStarting[i],
        shortestPathA[i - 1],
        shortestPathB[i - 1]
      );
      console.log(i, compareVal);
    }
  }

  return min;
}

function nextNode(queue, hasCompleted, minDist) {
  let min = Number.MAX_SAFE_INTEGER;
  let index;
  queue.forEach((idx) => {
    if (!hasCompleted[idx] && minDist[idx] < min) {
      min = minDist[idx];
      index = idx;
    }
  });

  return index;
}
