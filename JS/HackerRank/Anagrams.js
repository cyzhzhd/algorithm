// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const s = 'kkkk';

function sherlockAndAnagrams(s) {
  const subStringsArr = [];
  makeSubStr(s, subStringsArr);

  const alphabetHashMap = {};
  subStringsArr.forEach((str) => {
    alphabetHashMap[str] = new Array(26).fill(0);
    str.split('').forEach((c) => alphabetHashMap[str][c.charCodeAt(0) - 97]++);
  });
  let count = 0;
  for (let i = 0; i < subStringsArr.length; ++i) {
    for (let j = i + 1; j < subStringsArr.length; ++j) {
      const str1 = subStringsArr[i];
      const str2 = subStringsArr[j];

      if (str1.length === str2.length && compare(str1, str2, alphabetHashMap)) {
        count++;
      }
    }
  }

  return count;
}
function compare(str1, str2, alphabetHashMap) {
  for (let i = 0; i < 26; ++i) {
    if (alphabetHashMap[str1][i] !== alphabetHashMap[str2][i]) {
      return false;
    }
  }
  return true;
}

function makeSubStr(s, subStringsArr) {
  for (let i = 0; i < s.length; ++i) {
    for (let size = 1; size < s.length && i + size <= s.length; ++size) {
      subStringsArr.push(s.slice(i, i + size));
    }
  }
}

console.log(sherlockAndAnagrams(s));
