// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const s = 'kkkk';

function sherlockAndAnagrams(s) {
  const subStringsArr = new Array(s.length + 1).fill().map(() => new Array());
  const combination = [];
  makeCombination(s, 0, combination, subStringsArr);
  subStringsArr.splice(0, 1);

  const alphabetHashMap = {};
  subStringsArr.forEach((subStrings) => {
    subStrings.forEach((subString) => {
      const str = subString.join('');
      alphabetHashMap[str] = new Array(26).fill(0);
      subString.forEach((c) => alphabetHashMap[str][c.charCodeAt(0) - 97]++);
    });
  });

  console.log(subStringsArr);
  let count = 0;
  subStringsArr.forEach((subStrings) => {
    for (let i = 0; i < subStrings.length; ++i) {
      for (let j = i + 1; j < subStrings.length; ++j) {
        const str1 = subStrings[i].join('');
        const str2 = subStrings[j].join('');

        console.log(str1, str2);
        if (compare(str1, str2, alphabetHashMap)) {
          count++;
        }
      }
    }
  });

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

function makeCombination(s, idx, combination, subStringsArr) {
  if (idx === s.length) {
    subStringsArr[combination.length].push(combination);
    return;
  }
  makeCombination(s, idx + 1, combination, subStringsArr);
  const newCombination = [...combination, s[idx]];
  makeCombination(s, idx + 1, newCombination, subStringsArr);
}

console.log(sherlockAndAnagrams(s));
