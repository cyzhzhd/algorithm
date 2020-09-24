// https://programmers.co.kr/learn/courses/30/lessons/42839

const numbers = '011';

const getAllSubsets = (theArray) =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
    [[]]
  );
console.log(solution(numbers));

function solution(numbers) {
  const array = numbers.split('');
  const subsets = getAllSubsets(array);
  console.log(subsets);
  const permutation = subsets.map((subset) => permutations(subset));
  const all = new Set();
  permutation.map((arr) => {
    if (arr.length >= 2) {
      arr.map((subArr) => {
        all.add(Number(subArr.reduce((acc, c) => acc.concat(c), '')));
      });
    } else {
      all.add(Number(arr));
    }
  });

  console.log(all);
  let count = 0;
  for (let item of all) {
    if (checkPrime(item)) {
      count++;
    }
  }
  return count;
}
function checkPrime(n) {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function permutations(arr) {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  );
}
