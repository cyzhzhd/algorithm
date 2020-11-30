// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
const a = [1, 2, 3, 4, 5];
const d = 8;
function rotLeft(a, d) {
  const size = a.length;
  const rot = d % size;
  const arr1 = a.slice(0, rot);
  const arr2 = a.slice(rot, size);

  return arr2.concat(arr1);
}

console.log(rotLeft(a, d));
