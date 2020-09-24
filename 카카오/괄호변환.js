// https://programmers.co.kr/learn/courses/30/lessons/60058

// const p = '()))((()';
// const p = ')(';
const p = '(()())()';
console.log(solution(p));
function solution(p) {
  if (p === '') return '';
  let { u, v } = divide(p);
  if (isGood(u)) {
    v = solution(v);
    return u + v;
  }

  let answer = '(' + solution(v) + ')';
  u = u.split('');
  u.splice(0, 1);
  u.splice(u.length - 1, 1);
  u.map((x) => {
    if (x === '(') answer += ')';
    else x = answer += '(';
  }).join('');
  return answer;
}
function isGood(p) {
  let c = p[0];
  p = p.substr(1);
  let hasFound = false;
  while (c === '(') {
    hasFound = false;
    for (let i = 0; i < p.length; ++i) {
      if (p[i] === ')') {
        p = p.slice(0, i) + p.slice(i + 1);
        hasFound = true;
        break;
      }
    }
    if (hasFound) {
      c = p[0];
      p = p.substr(1);
    } else {
      break;
    }
  }

  if (p.length === 0 && hasFound && c !== ')') {
    return true;
  } else {
    return false;
  }
}

function divide(p) {
  let c = p[0];
  p = p.substr(1);
  let left = 0;
  let right = 0;
  let u = c;
  let v = '';
  if (c === ')') left++;
  else right++;
  while (left !== right) {
    c = p[0];
    p = p.substr(1);
    u += c;
    if (c === ')') left++;
    else right++;
  }
  v = p;

  return { u, v };
}
