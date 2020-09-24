const boxes = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

console.log(solution(boxes));

function solution(boxes) {
  const store = new Array(1000001).fill(0);

  boxes.forEach((box) => {
    store[box[0]]++;
    store[box[1]]++;
  });

  const mismatched = store.filter((n) => n % 2 === 1);
  return mismatched.length / 2;
}
