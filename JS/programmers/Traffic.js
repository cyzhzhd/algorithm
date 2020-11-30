// https://programmers.co.kr/learn/courses/30/lessons/17676

const lines = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];

console.log(solution(lines));
function solution(lines) {
  const candidates = [];
  const compare = [];
  lines.forEach((line) => {
    line = line.slice(11);
    const splits = line.split(' ');
    const time = splits[0].split(':');
    time.forEach((t, idx) => {
      time[idx] = Number(t);
    });
    splits[1] = Number(splits[1].slice(0, splits[1].length - 1)) * 1000;
    const to = (time[0] * 3600 + time[1] * 60 + time[2]) * 1000;
    const from = to - splits[1] + 1;
    // console.log(time);
    // console.log(splits[1]);
    // console.log('to', to);
    // console.log('from', from);

    candidates.push([from, to]);
    compare.push(from);
    compare.push(to);
  });

  //   console.log(candidates);
  //   console.log(compare);

  let max = 0;
  compare.forEach((c) => {
    const processed = candidates.filter((candidate) => {
      if (candidate[0] <= c && c <= candidate[1]) return true;
      else if (candidate[0] < c + 1000 && c + 1000 <= candidate[1]) return true;
      else if (candidate[0] >= c && candidate[1] <= c + 1000) return true;
      else return false;
    });

    const count = processed.length;
    max = max > count ? max : count;
  });

  return max;
}
