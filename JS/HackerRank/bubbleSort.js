// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

const arr = [3, 2, 9, 3, 1, 7, 8, 4];

// Complete the countSwaps function below.
function countSwaps(arr) {
  const size = arr.length - 1;
  let count = 0;
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j)
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        count++;
      }
  }
  console.log(arr);
  return [
    `Array is sorted in ${count} swaps.`,
    `First Element: ${arr[0]}`,
    `Last Element: ${arr[arr.length - 1]}`,
  ];
}

function swap(idx1, idx2, arr) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
console.log(countSwaps(arr));
