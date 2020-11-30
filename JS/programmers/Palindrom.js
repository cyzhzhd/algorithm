// https://programmers.co.kr/learn/courses/30/lessons/12904?language=javascript

const s = 'abcdcba';
console.log(solution(s));
function solution(s) {
  const length = s.length;

  let max = 0;
  for (let standard = 0; standard < length; standard++) {
    // case 1
    let left1 = standard;
    let right1 = standard + 1;
    let count = 0;
    while (0 <= left1 && right1 < length && s[left1] === s[right1]) {
      count++;
      left1--;
      right1++;
    }
    const answer1 = count * 2;

    max = max > answer1 ? max : answer1;

    // case 2
    let left2 = standard - 1;
    let right2 = standard + 1;
    let count2 = 0;
    while (0 <= left2 && right2 < length && s[left2] === s[right2]) {
      count2++;
      left2--;
      right2++;
    }

    const answer2 = count2 * 2 + 1;
    max = max > answer2 ? max : answer2;
  }

  return max;
}
