const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

function solution(clothes) {
  const categories = {};
  clothes.forEach((cloth) => {
    categories[cloth[1]] =
      categories[cloth[1]] === undefined ? 1 : ++categories[cloth[1]];
  });

  let answer = 1;
  for (const c in categories) {
    answer *= categories[c] + 1;
  }
  return answer - 1;
}
console.log(solution(clothes));
