// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];
// const arr = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

function hourglassSum(arr) {
  const hourglass = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  let max = -100000;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[0].length - 2; ++j) {
      let isInRange = true;
      let sum = 0;
      for (let k = 0; k < hourglass.length; ++k) {
        const newX = i + hourglass[k][0];
        const newY = j + hourglass[k][1];
        if (
          !(0 <= newX && newX < arr.length && 0 <= newY && newY < arr[0].length)
        ) {
          isInRange = false;
          break;
        }
        sum += arr[newX][newY];
      }

      if (isInRange) {
        max = max > sum ? max : sum;
      }
    }
  }

  return max;
}

console.log(hourglassSum(arr));
