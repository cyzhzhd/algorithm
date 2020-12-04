const arr = [10, 4, -8, 7];

function splitIntoTwo(arr) {
  // Write your code here
  const length = arr.length;
  let leftSum = 0;
  let rightSum = arr.reduce((acc, val) => acc + val, 0);
  let count = 0;

  for (let i = 0; i < length - 1; ++i) {
    leftSum = leftSum + arr[i];
    rightSum = rightSum - arr[i];
    if (leftSum > rightSum) count++;
  }
  return count;
}

console.log(splitIntoTwo(arr));
