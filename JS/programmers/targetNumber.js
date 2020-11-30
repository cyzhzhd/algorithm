// https://programmers.co.kr/learn/courses/30/lessons/43165

// 정석 DFS 문제
// 하나씩 더 해가며 마지막 숫자까지 더했을 때 값이 target과 일치한다면 answer++해준다.

const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  var answer = 0;

  function DFS(arr, index, sum) {
    if (index === arr.length) {
      sum === target ? (answer += 1) : answer;
      return;
    }

    DFS(arr, index + 1, sum + arr[index]);
    DFS(arr, index + 1, sum - arr[index]);
  }

  DFS(numbers, 0, 0);
  return answer;
}

console.log(solution(numbers, target));
