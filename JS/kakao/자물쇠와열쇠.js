// https://programmers.co.kr/learn/courses/30/lessons/60059

const key = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
];
const lock = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log(solution(key, lock));

function solution(original_key, original_lock) {
  // 1. 비교할 공간을 뽑는다.
  const lock = extractKey(original_lock, 0);

  // 2. 키를 움직인다.
  for (let count = 0; count < 4; ++count) {
    // 시계방향으로 90도 돌리고 0,0을 길이만큼 좌상단으로 올린다.
    // 0,0을 기준으로 4배 넓어진 모든 공간을 방문한다.
    original_key = clockWise(original_key);
    const length = original_lock.length;
    let key = extractKey(original_key, 1);
    moveKey(key, length);

    // 맨 왼쪽, 맨 위부터 차례로 시작
    let row = length * 2;
    let storedRow = row;
    while (row--) {
      let col = length * 2;
      let storedCol = col;
      while (col--) {
        for (let i = 0; i < key.length; ++i) {
          key[i][1]++;
          if (compare(key, lock, length)) {
            return true;
          }
        }
      }
      // row = 한칸 아래, col = 원상태
      key.forEach((hall) => {
        hall[0]++;
        hall[1] -= storedCol;
      });
    }
    key.forEach((hall) => {
      hall[0] -= storedRow;
    });
  }

  return false;
}

function extractKey(target, val) {
  const len = target.length;
  const keys = [];
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      if (target[i][j] === val) {
        keys.push([i, j]);
      }
    }
  }

  return keys;
}

function compare(key, lock, length) {
  const validKey = key.filter(
    (hall) =>
      0 <= hall[0] && hall[0] < length && 0 <= hall[1] && hall[1] < length
  );

  if (lock.length !== validKey.length) {
    return false;
  }

  // console.log(validKey, lock);
  const size_valid = validKey.length;
  for (let i = 0; i < size_valid; ++i) {
    if (!(lock[i][0] === validKey[i][0] && lock[i][1] === validKey[i][1])) {
      return false;
    }
  }

  return true;
}

function clockWise(key) {
  const size = key.length;
  const newKey = new Array(size).fill(0).map(() => new Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newKey[i][j] = key[size - j - 1][i];
    }
  }
  // console.log('turn');
  return newKey;
}

function moveKey(key, size) {
  key.forEach((hall) => {
    hall[0] -= size;
    hall[1] -= size;
  });
}
