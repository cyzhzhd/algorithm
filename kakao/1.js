const new_id = 'abcdefghijklmn.p';

console.log(solution(new_id));

function solution(new_id) {
  let id = [];
  // 1단계. 대문자를 소문자로
  new_id.split('').map((c) => {
    if (65 <= c.charCodeAt() && c.charCodeAt() <= 90) {
      id.push(String.fromCharCode(c.charCodeAt() + 32));
    } else {
      id.push(c);
    }
  });

  console.log(id.join(''));
  // 2단계. 지정된 문자외의 문자는 지우기
  id = id.filter((c) => {
    if (97 <= c.charCodeAt() && c.charCodeAt() <= 122) {
      return true;
    } else if (!isNaN(Number(c))) {
      return true;
    } else if (c === '-' || c === '_' || c === '.') {
      return true;
    }
    return false;
  });

  console.log(id.join(''));
  // 3단계. ...을 .으로
  for (let i = 0; i < id.length; i++) {
    if (id[i] === '.') {
      let count = 1;
      for (let j = i + 1; j < id.length; j++) {
        if (id[j] === '.') count++;
        else break;
      }
      if (count > 1) {
        id.splice(i, count - 1);
      }
    }
  }

  console.log(id.join(''));
  // 4단계. .이 처음이나 끝이라면 제거
  if (id[0] === '.') id.shift();
  if (id[id.length - 1] === '.') id.pop();

  console.log(id.join(''));

  // 5단계. 빈 문자열이라면 a대입
  if (!id.length) id = ['a'];

  // 6단계 길이가 16자 이상이면 15자리만 남겨놓음
  if (id.length >= 16) id = id.slice(0, 15);
  // 4단계. .이 처음이나 끝이라면 제거
  if (id[0] === '.') id.shift();
  if (id[id.length - 1] === '.') id.pop();

  // 7단계. 길이가 2자 이하라면 마지막 문자를 반복해 길이가 3이 될때까지 반복
  while (id.length <= 2) {
    id.push(id[id.length - 1]);
  }

  return id.join('');
}
