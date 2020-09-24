// https://www.hackerrank.com/challenges/dijkstrashortreach/problem?h_r=internal-search'use strict';

const fs = require('fs');
const { findSourceMap } = require('module');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function hasMore(hasCompleted, minDist) {
  const left = hasCompleted.filter((node) => !node).length;
  const left2 = minDist.filter((val) => val > 1000000).length;

  console.log(left, left2);
  return left - left2;
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

// Complete the shortestReach function below.
function shortestReach(n, edges, s) {
  const connectedList = new Array(n + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  edges.forEach((edge) => {
    if (connectedList[edge[0]][edge[1]] > edge[2]) {
      connectedList[edge[0]][edge[1]] = edge[2];
      connectedList[edge[1]][edge[0]] = edge[2];
    }
  });

  const queue = [];
  const hasVisited = new Array(n + 1).fill(false);
  const hasCompleted = new Array(n + 1).fill(false);
  const minDist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  queue.push(s);
  hasVisited[0] = true;
  hasCompleted[0] = true;
  minDist[0] = 0;
  hasVisited[s] = true;
  minDist[s] = 0;

  while (hasMore(hasCompleted, minDist)) {
    console.log('queue = ', queue);
    const from = nextNode(queue, hasCompleted, minDist);
    queue.splice(queue.indexOf(from), 1);
    console.log('from', from);
    connectedList[from].forEach((distance, idx) => {
      if (distance < 1000000 && !hasVisited[idx]) {
        queue.push(idx);
        hasVisited[idx] = true;
      }
      minDist[idx] =
        minDist[idx] > minDist[from] + distance
          ? minDist[from] + distance
          : minDist[idx];
    });
    hasCompleted[from] = true;
  }

  for (let i = 0; i < n + 1; i++) {
    if (minDist[i] === Number.MAX_SAFE_INTEGER) {
      minDist[i] = -1;
    }
  }
  minDist.splice(s, 1);
  minDist.shift();
  return minDist;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let edges = Array(m);

    for (let i = 0; i < m; i++) {
      edges[i] = readLine()
        .split(' ')
        .map((edgesTemp) => parseInt(edgesTemp, 10));
    }

    const s = parseInt(readLine(), 10);

    let result = shortestReach(n, edges, s);

    ws.write(result.join(' ') + '\n');
  }

  ws.end();
}
