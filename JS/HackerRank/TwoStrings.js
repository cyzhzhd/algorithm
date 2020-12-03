// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen

const s1 = 'hello';
const s2 = 'world';

function twoStrings(s1, s2) {
  for (const c of s1) {
    if (s2.includes(c)) {
      return 'YES';
    }
  }
  return 'NO';
  let isSharing = false;
  s1.split('').some((c1) => {
    s2.split('').some((c2) => {
      if (c1 === c2) {
        isSharing = true;
        return true;
      }
      return false;
    });
    if (isSharing) return true;
    return false;
  });

  return isSharing ? 'YES' : 'NO';
}

console.log(twoStrings(s1, s2));
