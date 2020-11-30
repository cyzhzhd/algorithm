// https://programmers.co.kr/learn/courses/30/lessons/42840

// 찍는 패턴을 적용하여 가장 높은 점수를 가진 사람 반환

const answer = [1, 2, 3, 4, 5];

function solution(answers) {
  const happyDumb1 = getScore([1, 2, 3, 4, 5], answers);
  const happyDumb2 = getScore([2, 1, 2, 3, 2, 4, 2, 5], answers);
  const happyDumb3 = getScore([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers);

  if (happyDumb1 > happyDumb2) {
    if (happyDumb1 > happyDumb3) return [1];
    else if (happyDumb1 === happyDumb3) return [1, 3];
    else return [3];
  } else if (happyDumb1 === happyDumb2) {
    if (happyDumb1 > happyDumb3) return [1, 2];
    else if (happyDumb1 === happyDumb3) return [1, 2, 3];
    else return [3];
  } else {
    if (happyDumb2 > happyDumb3) return [2];
    else if (happyDumb2 === happyDumb3) return [2, 3];
    else return [3];
  }
}

function getScore(pattern, answer) {
  let score = 0;
  for (let i = 0; i < answer.length; i += 1) {
    if (answer[i] === pattern[i % pattern.length]) {
      score++;
    }
  }

  return score;
}
