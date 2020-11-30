// https://programmers.co.kr/learn/courses/30/lessons/42628

const operations = [
  'I -45',
  'I 653',
  'D 1',
  'I -642',
  'I 45',
  'I 97',
  'D 1',
  'D -1',
  'I 333',
];

console.log(solution(operations));

function solution(operations) {
  const insert = [];

  for (const op of operations) {
    const splits = op.split(' ');
    if (splits[0] === 'I') {
      insert.push(splits[1]);
    } else if (splits[1][0] === '-') {
      const idx = insert.indexOf(Math.min(...insert).toString());
      insert.splice(idx, 1);
    } else {
      const idx = insert.indexOf(Math.max(...insert));
      insert.splice(idx, 1);
    }
  }
  insert.sort((a, b) => a - b);
  console.log(insert);

  if (insert.length) {
    return [Number(insert[insert.length - 1]), Number(insert[0])];
  } else {
    return [0, 0];
  }
}
