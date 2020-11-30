// https://programmers.co.kr/learn/courses/30/lessons/42579

const genres = ['a', 'b', 'a', 'b', 'c'];
const plays = [100, 200, 300, 400, 500];

function solution(genres, plays) {
  // 1. 장르별 재생 횟수
  const tempNumPlays = {};
  genres.map((genre, index) => {
    tempNumPlays[genre] === undefined
      ? (tempNumPlays[genre] = plays[index])
      : (tempNumPlays[genre] += plays[index]);
  });

  // 2. 배열로 변경
  const numPlays = [];
  const keys = Object.keys(tempNumPlays);
  keys.forEach((key, idx) => {
    const temp = [key, tempNumPlays[key]];
    numPlays.push(temp);
  });
  numPlays.sort((a, b) => b[1] - a[1]);
  //   console.log(numPlays);

  // 3. 수록
  const answer = [];
  let n = genres.length;
  let isTaken = new Array(n).fill(false);
  numPlays.forEach((key) => {
    const songs = plays
      .filter((play, idx) => (key[0] === genres[idx] ? true : false))
      .sort((a, b) => b - a)
      .slice(0, 2);

    // console.log(songs);
    songs.forEach((val) => {
      for (let i = 0; i < n; ++i) {
        if (plays[i] === val && !isTaken[i]) {
          answer.push(i);
          isTaken[i] = true;
          break;
        }
      }
    });
  });
  return answer;
}

// console.log(solution(genres, plays));

var tc = [
  {
    name: 'default',
    param1: ['classic', 'pop', 'classic', 'classic', 'pop'],
    param2: [500, 600, 150, 800, 2500],
    result: [4, 1, 3, 0],
  },
  {
    name: 'normal',
    param1: ['a', 'b', 'a', 'b', 'c'],
    param2: [100, 200, 300, 400, 500],
    result: [3, 1, 4, 2, 0],
  },
  {
    name: 'onlyone',
    param1: ['a'],
    param2: [1],
    result: [0],
  },
  {
    name: 'onegenre',
    param1: ['a', 'a', 'a'],
    param2: [1, 1, 1],
    result: [0, 1],
  },
  {
    name: 'onepopular',
    param1: ['a', 'b', 'c', 'b', 'c', 'd'],
    param2: [1000, 1, 2, 3, 4, 5],
    result: [0, 4, 2, 5, 3, 1],
  },
  {
    name: 'equal',
    param1: ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'],
    param2: [1, 1, 1, 1, 1, 1, 1, 1],
    result: [6, 7, 4, 5, 2, 3, 0, 1],
  },
  {
    name: 'q1',
    param1: ['classic', 'pop', 'classic', 'pop', 'classic', 'classic'],
    param2: [400, 600, 150, 2500, 500, 500],
    result: [3, 1, 4, 5],
  },
  {
    name: 'equal2',
    param1: ['a', 'a', 'b', 'c', 'a', 'a'],
    param2: [1, 2, 2, 2, 2, 2],
    result: [1, 4, 3, 2],
  },
  {
    name: '2results',
    param1: ['a', 'b', 'c', 'd', 'e', 'f'],
    param2: [1, 2, 3, 4, 5, 6],
    result: [5, 4, 3, 2, 1, 0],
  },
  {
    name:
      '장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.',
    param1: ['a', 'a', 'd', 'd', 'c', 'b'],
    param2: [5, 5, 3, 3, 5, 6],
    result: [0, 1, 5, 2, 3, 4],
  },
  {
    name: '장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.',
    param1: ['a', 'a', 'd', 'd', 'c', 'b'],
    param2: [5, 5, 3, 3, 500, 6],
    result: [4, 0, 1, 5, 2, 3],
  },
];

tc.forEach((test) => {
  const a = solution(test.param1, test.param2);
  console.log(test.result);
  console.log(a);

  test.result === solution(test.param1, test.param2)
    ? console.log('good')
    : console.log('bad');
});
