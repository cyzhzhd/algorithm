// https://leetcode.com/problems/last-stone-weight/

const stones = [3, 7, 8];

var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    const biggest = stones.shift();
    const secondBiggest = stones.shift();

    if (biggest > secondBiggest) {
      store(stones, biggest - secondBiggest);
    }
  }
  if (stones.length) return stones[0];
  else return 0;
};

function store(stones, residue) {
  let left = 0;
  let right = stones.length;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (stones[mid] === residue) {
      left = mid;
      break;
    } else if (stones[mid] > residue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  stones.splice(left, 0, residue);
}

console.log(lastStoneWeight(stones));
