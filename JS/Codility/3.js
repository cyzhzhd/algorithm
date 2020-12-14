// const S = 'aaaa';
// const C = [3, 4, 5, 6];
// const S = 'aaaabb';
// const C = [3, 4, 5, 6, 7, 8];
// const S = 'abbbbbccd';
// const C = [1, 3, 1, 2, 4, 2, 8, 6, 7];
// const S = 'abccbd';
const S = 'abbbbbccc';
const C = [1, 5, 4, 3, 2, 1, 1, 2, 3];

function solution(S, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  const length = S.length;
  let answer = 0;

  for (let i = 0; i < length - 1; ++i) {
    let jump = 0;
    while (S[i] === S[i + 1 + jump] && i < length - 1) {
      if (C[i] > C[i + 1 + jump]) {
        answer += C[i + 1 + jump];
        jump++;
      } else {
        answer += C[i];
        i += jump + 1 || 1;
        jump = 0;
      }
    }
    i += jump;
  }

  return answer;
}

console.log(solution(S, C));
