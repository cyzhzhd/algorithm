// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const s = 'cdcd';

function sherlockAndAnagrams(s) {
  // const hasCompared = new Array(101)
  //   .fill()
  //   .map(() =>
  //     new Array(101)
  //       .fill()
  //       .map(() => new Array(101).fill().map(() => new Array(101).fill(false))),
  //   );
  const size = s.length;
  let count = 0;
  for (let i = 0; i < size; ++i) {
    for (let j = i + 1; j < size; ++j) {
      if (s[i] === s[j]) {
        count++;
        // count += checkInside(s, i, j, i + 1, j - 1, hasCompared);
        count += checkInside(s, i, j, i + 1, j - 1);
        // count += checkOutside(s, i, j, hasCompared);
      }
    }
  }

  return count;
}
function compare(s1, s2) {
  const obj = {};
  s1.split('').forEach((val) => (obj[val] ? obj[val]++ : (obj[val] = 1)));
  const s2Arr = s2.split('');
  for (const word of s2Arr) {
    if (obj[word] === undefined || obj[word] < 1) {
      return 0;
    }
    obj[word]--;
  }
  return 1;
}

function checkInside(s, i, j, left, right) {
  let count = 0;
  while (i < right) {
    const leftString = s.slice(i, ++left);
    const rightString = s.slice(--right, j);
    // if (hasCompared[i][left][j][right]) {
    //   console.log(i, left, j, right);
    //   continue;
    // }
    if (compare(leftString, rightString) === 1) {
      // hasCompared[i][left][j][right] = true;
      // hasCompared[i][left][right][j] = true;
      count++;
    }
  }

  return count;
}

function checkOutside(s, i, j, hasCompared) {
  const size = s.length;
  let count = 0;
  let left = i + 1;
  let right = j + 1;
  let leftString = s.slice(i, left);
  let rightString = s.slice(j, right);
  while (compare(leftString, rightString) === 1 && right < size) {
    if (hasCompared[i][left][j][right]) {
      console.log(i, left, j, right);
      ++left;
      ++right;
      break;
    }
    count++;
    leftString = s.slice(i, ++left);
    rightString = s.slice(j, ++right);
    hasCompared[i][left][j][right] = true;
    hasCompared[i][left][right][j] = true;
  }

  return count;
}

console.log(sherlockAndAnagrams(s));
