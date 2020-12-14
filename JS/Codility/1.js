function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const idx = arr.indexOf(S);
  const ans = (idx + K) % 7;

  return arr[ans];
}

console.log(solution('Mon', 1));
console.log(solution('Mon', 2));
console.log(solution('Sun', 1));
