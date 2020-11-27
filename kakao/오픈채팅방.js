// https://programmers.co.kr/learn/courses/30/lessons/42888

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
  'Enter uid1235 Prodo',
  'Leave uid1235',
];

console.log(solution(record));

function solution(records) {
  const userlist = {};

  // 1. 유저 리스트 생성
  records.forEach((record) => {
    record = record.split(' ');

    if (record[0] === 'Leave') return;
    userlist[record[1]] = record[2];
  });

  // 2. 로그 생성
  const log = [];
  records.forEach((record) => {
    record = record.split(' ');

    if (record[0] === 'Enter') {
      log.push(`${userlist[record[1]]}님이 들어왔습니다.`);
    } else if (record[0] === 'Leave') {
      log.push(`${userlist[record[1]]}님이 나갔습니다.`);
    }
  });

  return log;
}
