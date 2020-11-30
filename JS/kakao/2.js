const orders = ['AB', 'ABC', 'ABCD', 'ABCDE', 'ABCDEF', 'BC'];
const course = [2, 3, 4, 5, 6];

console.log(solution(orders, course));

function solution(orders, courses) {
  const size = orders.length;

  // 1. 겹치는 주문을 구함
  let overlaps = new Array(size).fill(0).map(() => new Array());

  for (let i = 0; i < size; ++i) {
    const menus = orders[i];
    for (let j = 0; j < size; ++j) {
      if (i === j) continue;
      let overlap = '';

      menus.split('').forEach((menu) => {
        if (orders[j].includes(menu)) {
          overlap += menu;
        }
      });
      overlaps[i].push(overlap);
    }
  }

  // 2. 메뉴가 2개 이상 겹치는 친구들만 남김
  const tempOverlaps = [];
  overlaps.forEach((overlap) => {
    tempOverlaps.push(overlap.filter((order) => order.length > 1));
  });
  overlaps = tempOverlaps;
  //   console.log(overlaps);

  const newCourse = {};

  // 3. 코스 후보
  overlaps.forEach((overlap) => {
    overlap.forEach((ov) => {
      newCourse[ov] = 0;
    });
  });

  // 4. 코스 후보가 주문된 수
  const keys = Object.keys(newCourse);
  //   console.log('overlaps = ', overlaps);
  //   console.log('keys = ', keys);
  overlaps.forEach((overlap) => {
    overlap.forEach((ov) => {
      keys.forEach((key) => {
        //   console.log(key);
        let hasInclude = true;
        key.split('').forEach((c) => {
          //   console.log('ov = ', ov);
          //   console.log('c = ', c);
          if (!ov.includes(c)) {
            hasInclude = false;
          }
        });
        if (hasInclude) {
          newCourse[key]++;
        }
      });
    });
  });
  console.log('newCourse =', newCourse);

  const answer = [];
  courses.forEach((course) => {
    let candidates = keys
      .map((key) => {
        if (key.length === course) {
          return [key, newCourse[key]];
        }
      })
      .filter((candidate) => candidate);

    candidates.sort((a, b) => b[1] - a[1]);
    // console.log('can', candidates);

    candidates = candidates.filter(
      (candidate) => candidate[1] === candidates[0][1]
    );
    // console.log('can', candidates);
    candidates.forEach((candidate) => answer.push(candidate[0]));
  });
  answer.sort();

  //   console.log(answer);
  for (let i = 0; i < answer.length; ++i) {
    for (let j = i + 1; j < answer.length; ++j) {
      if (isSame(answer[i], answer[j])) {
        answer.splice(j, 1);
      }
    }
  }
  return answer;
}

function isSame(a, b) {
  if (a.length !== b.length) return false;

  let isDIffenrent = false;
  for (let i = 0; i < a.length; ++i) {
    if (!b.includes(a[i])) {
      isDIffenrent = true;
    }
  }

  if (isDIffenrent) return false;
  return true;
}
