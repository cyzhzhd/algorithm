// https://programmers.co.kr/learn/courses/30/lessons/42884

const routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

console.log(solution(routes));

function solution(original_routes) {
  let routes = [];
  original_routes.forEach((route) => {
    routes.push([route[0] + 30000, route[1] + 30000]);
  });

  routes.sort((a, b) => a[1] - b[1]);
  //   console.log(routes);

  let count = 0;
  while (routes.length) {
    const point = routes[0][1];
    count++;
    routes = routes.filter((route) => {
      if (route[0] <= point && point <= route[1]) {
        return false;
      }
      return true;
    });
  }

  return count;
}
