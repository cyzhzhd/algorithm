// https://programmers.co.kr/learn/courses/30/lessons/43238

const n = 6;
const times = [7, 10];

function solution(n, times) {
  let left = 0;
  let right = Math.max(...times) * n;
  let answer = right;

  // 이분탐색으로 모든 사람을 심사하는데 걸리는 시간을 구함.
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let served = 0;
    for (const time of times) {
      served += Math.floor(mid / time);
    }

    if (n > served) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(n, times));

//
//
//

// function solution(n, times) {
//   const count = new Array(times.length).fill(0);
//   let time = 0;
//   while (n > 0) {
//     time++;
//     for (let i = 0; i < times.length; i += 1)
//       if (times[i] === ++count[i]) {
//         n -= 1;
//         count[i] = 0;
//       }
//   }
//   return time;
// }

// console.log(solution(n, times));
