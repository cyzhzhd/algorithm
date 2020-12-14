const N = 1;

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let strN = N.toString().split('');
  let max = -85001;
  for (let i = 0; i <= strN.length; ++i) {
    if (strN[i] === '-') continue;

    let temp = [...strN];
    temp.splice(i, 0, '5');
    let maxCandidate = Number(temp.join(''));
    max = max > maxCandidate ? max : maxCandidate;
  }
  return max;
}

console.log(solution(N));
