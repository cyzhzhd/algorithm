// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
A = [1, 3, 6, 4, 1, 2];

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const unique = [...new Set(A)];
  unique.sort((a, b) => a - b);
  console.log(unique);
  let i;
  for (i = 0; i < A.length; ++i) {
    if (unique[i] !== i + 1) return i + 1;
  }
  return i + 1;
}

console.log(solution(A));
