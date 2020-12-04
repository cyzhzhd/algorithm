// const timestamp = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const top = [6, 6, 6, 6];
const timestamp = [2, 2, 4, 8, 11, 28, 30];
const top = [0, 5, 5, 15];

function upperBound(timestamp, time, leftIdx, rightIdx) {
  while (rightIdx - leftIdx > 0) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    time >= timestamp[midIdx] ? (leftIdx = midIdx + 1) : (rightIdx = midIdx);
  }
  return rightIdx;
}

function requestsServed(timestamp, top) {
  // Write your code here
  const n = timestamp.length;
  const rpm = 5;
  timestamp.sort((a, b) => a - b);
  top.sort((a, b) => a - b);

  const workingTime = new Array(60).fill(0);
  top.forEach((val) => workingTime[val]++);

  let numProcessed = 0;
  workingTime.forEach((numWorking, time) => {
    if (numWorking > 0) {
      const numStacked = upperBound(timestamp, time, 0, n);
      const numLeft = numStacked - numProcessed;
      numWorking * rpm > numLeft
        ? (numProcessed += numLeft)
        : (numProcessed += numWorking * rpm);
    }
  });

  return numProcessed;
}

console.log(requestsServed(timestamp, top));
