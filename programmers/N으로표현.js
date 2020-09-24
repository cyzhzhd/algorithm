// https://programmers.co.kr/learn/courses/30/lessons/42895

const N = 5;
const number = 12;

function solution(N, number) {
  const arr = [];

  // 5, 55, 555, 5555 ... 처리
  let M = '';
  for (let i = 1; i < 9; i += 1) {
    arr[i] = new Set();
    M += N;
    arr[i].add(Number(M));
  }

  // F(4) = F(3) + (F1), F(2) + F(2), F(1) + F(3)
  for (let i = 2; i < 9; i += 1) {
    for (let j = 1; j < i; j += 1) {
      for (const a of arr[j]) {
        for (const b of arr[i - j]) {
          arr[i].add(a + b);
          arr[i].add(a - b);
          arr[i].add(a * b);
          arr[i].add((a / b) >> 0);
        }
      }
    }
    if (arr[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(N, number));
