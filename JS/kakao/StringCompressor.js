// https://programmers.co.kr/learn/courses/30/lessons/60057

// const s = 'aabbaccc';

const s = 'abcabcabcabcdededededede';

console.log(solution(s));

function solution(s) {
  const half = Math.ceil(s.length / 2);
  let n = 1;
  let min = s.length;
  while (n <= half) {
    let temp = s;
    let length = temp.length;
    for (let i = 0; i < temp.length; i += n) {
      let count = 1;
      const target = temp.slice(i, i + n);
      for (var j = i + n; j < temp.length; j += n) {
        const opponent = temp.slice(j, j + n);
        if (target !== opponent) break;
        count++;
      }
      if (count > 1) {
        length -= count * n - count.toString().length - n;
        i = j - n;

        // temp = temp.slice(0, i) + count + temp.slice(i, i + n) + temp.slice(j);
        // i += 1;
      }
    }
    min = min > length ? length : min;
    n++;
  }
  return min;
}
