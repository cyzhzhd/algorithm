// https://programmers.co.kr/learn/courses/30/lessons/43164

// const tickets = [
//   ['ICN', 'SFO'],
//   ['ICN', 'ATL'],
//   ['SFO', 'ATL'],
//   ['ATL', 'ICN'],
//   ['ATL', 'SFO'],
// ];
const tickets = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
];

console.log(solution(tickets));

function solution(tickets) {
  const size = tickets.length;
  const connectedList = {};

  tickets.forEach((ticket) => {
    if (connectedList[ticket[0]]) {
      connectedList[ticket[0]].push(ticket[1]);
    } else {
      connectedList[ticket[0]] = [ticket[1]];
    }
  });

  console.log(connectedList);
  const answers = [];
  const stack = [['ICN', ['ICN'], Object.assign({}, connectedList)]];
  while (stack.length) {
    const current = stack.pop();
    const from = current[0];
    const paths = current[1];
    const list = current[2];

    if (!list[from]) continue;
    list[from].forEach((to) => {
      let path = [...paths, to];
      const newList = JSON.parse(JSON.stringify(list));
      //   const newList = Object.assign({}, list);
      const idx = newList[from].findIndex((val) => val === to);
      newList[from].splice(idx, 1);
      stack.push([to, path, newList]);

      //   console.log(path);
      if (path.length === size + 1) {
        answers.push(path);
      }
    });
  }

  answers.sort();
  return answers[0];
}
