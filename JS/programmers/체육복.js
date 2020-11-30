// https://programmers.co.kr/learn/courses/30/lessons/42862

// 여분 체육복을 가지고 있지만 도둑 맞은 사람은 남에게 줄 수 없다.
// 따라서 먼저 다른 사람에게 체육복을 줄 수 있는 사람만 다른 배열로 모은다.
// 마찬가지로 체육복이 없는 학생만 다른 배열로 모은다.
// 앞에 있는 친구가 체육복이 없다면 체육복을 주고, 앞에 있는 체육복이 있을 때는 뒤에 있는 친구에게 체육복을 준다.

const n = 10;
const lost = [2, 3, 4, 5, 6, 7];
const reserve = [1, 2, 3];

function solution(n, lost, reserve) {
  const newReserve = reserve.filter((r) => !lost.includes(r));
  lost = lost.filter((l) => !reserve.includes(l));

  newReserve.forEach((student) => {
    index = lost.indexOf(student - 1);
    if (index >= 0) {
      lost.splice(index, 1);
      return;
    }
    index = lost.indexOf(student + 1);
    if (index >= 0) {
      lost.splice(index, 1);
      return;
    }
  });

  return n - lost.length;
}

// function solution(n, lost, reserve) {
//   return (
//     n -
//     lost.filter((a) => {
//       const b = reserve.find((r) => Math.abs(r - a) <= 1);
//       if (!b) return true;
//       reserve = reserve.filter((r) => r !== b);
//     }).length
//   );
// }

console.log(solution(n, lost, reserve));
