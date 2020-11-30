// https://programmers.co.kr/learn/courses/30/lessons/42860

const name = 'AAABCAAA';

console.log(solution(name));

function solution(name) {
  // 1. 해당 알파벳까지 갈 수 있는 최단 거리
  // A = 65, Z = 90
  name = name.split('');
  let sum = 0;
  name.forEach((c) => {
    const ascii = c.charCodeAt();
    const max = ascii - 65 > 91 - ascii ? 91 - ascii : ascii - 65;
    sum += max;
  });

  // 2. 바꿔야 하는 인덱스
  const indice = [];
  const length = name.length;
  name.forEach((c, idx) => {
    if (c === 'A') return;
    indice.push(idx);
  });

  console.log(indice);
  console.log(sum);
  //   console.log(length);

  // 3. 인덱스를 모두 바꾸기 위한 최단거리의 합
  let current = 0;
  let movingDistance = 0;
  let next;
  let previouse;
  let forward;
  let backward;
  let lastIdx = 0;
  if (indice[0] === 0) indice.splice(0, 1);
  while (indice.length > 1) {
    // 인덱스가 0에 위치할 때와 마지막에 위치할 때를 구분하여 계산
    if (current === indice.length - 1) {
      next = indice[0];
      previouse = indice[current - 1];
      forward = length - lastIdx + next;
      backward = lastIdx - previouse;
    } else if (current === 0) {
      next = indice[0];
      previouse = indice[indice.length - 1];
      forward = next - lastIdx;
      backward = length - previouse + lastIdx;
    }
    // console.log(indice);

    // 앞으로 가는게 빠른지, 뒤로 가는게 빠른지 계산
    if (forward > backward) {
      current = indice.length - 1;
      movingDistance += backward;
    } else {
      current = 0;
      movingDistance += forward;
    }
    // console.log(movingDistance);
    lastIdx = indice[current];
    indice.splice(current, 1);
  }
  forward = Math.abs(lastIdx - indice[0]);
  backward = Math.abs(lastIdx + length - indice[0]);
  const min = forward > backward ? backward : forward;
  movingDistance += min;
  return sum + movingDistance;
}
