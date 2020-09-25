// https://programmers.co.kr/learn/courses/30/lessons/12900
const n = 9;

console.log(solution(n));
function solution(n) {
  const dp = new Array(60002);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 1; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
}
