const x = 14;
const space = [
  557976423,
  2296438,
  909198393,
  443549744,
  247744036,
  541382867,
  610964275,
  909198393,
  909198399,
  888777816,
  909198401,
  290509795,
  909198410,
  909198400,
  909198419,
  909198416,
  909198421,
  275575612,
  748910329,
  588294902,
  909198420,
  15627292,
  909198429,
  909198435,
  909198434,
  751073506,
  909198431,
  572987961,
  909198425,
  499342890,
  909198440,
  909198437,
  909198441,
  359474765,
  283966497,
  909198447,
  909198443,
  909198439,
  909198449,
  909198449,
  994817311,
  154197786,
  994817302,
  994817313,
  382723064,
  994817310,
  994817312,
  994817307,
  314442235,
  994817304,
  773472376,
  301013741,
  994817308,
  994817312,
  994817313,
  847879120,
  296955284,
  994817317,
  994817318,
  910553541,
  451808250,
  768362539,
  994817317,
  909053907,
  994817315,
  994817306,
  590283269,
  994817319,
  994817325,
  595415821,
  994817323,
  994817331,
  774733873,
  944700079,
  994817331,
  178470168,
  994817334,
  994817339,
  280314110,
  130279016,
  994817336,
  994817345,
  994817352,
  994817343,
  994817351,
  994817352,
  994817357,
  994817364,
  712485851,
  637763857,
  8061097,
  994817369,
  994817364,
  594875430,
  994817376,
  994817379,
  573597298,
  994817389,
  82375803,
  994817399,
];
// const x = 10;
// const space = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const x = 1;
// const space = [1, 1000000000];
// const x = 1;
// const space = [1, 2, 3, 1, 2];
// const x = 3;
// const space = [2, 5, 4, 6, 8];

function findMinNextMin(arr) {
  const MAX = 1000000001;
  let min = MAX;
  let minIdx = 0;
  let nextMin = MAX;
  let nextMinIdx = 0;
  arr.forEach((val, idx) => {
    if (val < min) {
      min = val;
      minIdx = idx;
    } else if (val < nextMin) {
      nextMin = val;
      nextMinIdx = idx;
    }
  });
  return [min, minIdx, nextMin, nextMinIdx];
}
function segment(x, space) {
  // Write your code here
  const MAX = 1000000001;
  const length = space.length;
  let leftIdx = 0;
  let rightIdx = x;
  let ans = 0;
  let [min, minIdx, nextMin, nextMinIdx] = [-1, -1, -1, -1];
  while (rightIdx <= length) {
    // minIdx is not in the range
    leftIdx = rightIdx - x;
    if (minIdx < leftIdx) {
      if (nextMin < MAX && nextMinIdx >= leftIdx) {
        // nextMin exists
        min = nextMin;
        minIdx = nextMinIdx;

        nextMin = MAX;
      } else {
        // min and nextMin do not exist. find a new min and nextMin set.
        [min, minIdx, nextMin, nextMinIdx] = findMinNextMin(
          space.slice(leftIdx, rightIdx),
        );
        minIdx += leftIdx;
        nextMinIdx += leftIdx;

        ans = ans > min ? ans : min;
        rightIdx++;
        continue;
      }
    }

    // new Val is smaller than min or minNext
    if (min > space[rightIdx]) {
      nextMin = min;
      nextMinIdx = minIdx;

      min = space[rightIdx];
      minIdx = rightIdx;
    } else if (nextMin < MAX && nextMin > space[rightIdx]) {
      nextMin = space[rightIdx];
      nextMinIdx = rightIdx;
    }

    ans = ans > min ? ans : min;
    rightIdx++;
  }

  return ans;
}

console.log(segment(x, space));
