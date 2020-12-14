// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
const a = 'cdez';
const b = 'dcfz';
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  const hash_A = new Array(26).fill(0);
  const hash_B = new Array(26).fill(0);
  a.split('').forEach((c) => hash_A[c.charCodeAt() - 97]++);
  b.split('').forEach((c) => hash_B[c.charCodeAt() - 97]++);
  let sum = 0;
  for (let i = 0; i < 26; ++i) {
    sum += Math.abs(hash_A[i] - hash_B[i]);
  }

  return sum;
}

console.log(makeAnagram(a, b));
