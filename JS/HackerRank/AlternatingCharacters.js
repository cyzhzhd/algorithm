// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

const s = 'AAABBB';
function alternatingCharacters(s) {
  const size = s.length - 1;
  s = s.split('');
  let count = 0;
  for (let i = 0; i < size; ++i) {
    if (s[i] === s[i + 1]) {
      count++;
    }
  }

  return count;
}

console.log(alternatingCharacters(s));
