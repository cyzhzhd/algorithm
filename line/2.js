const balls = [1000000, 2, 3, 4, 5, 6];
const orders = [3, 4, 2, 5, 1000000, 6];

console.log(solution(balls, orders));

function solution(balls, orders) {
  const size = balls.length;
  const answer = [];
  const queue = [];
  let left = 0;
  let right = size - 1;

  for (let i = 0; i < size; ++i) {
    let hasPoped = false;
    if (orders[i] === balls[left]) {
      answer.push(balls[left++]);
      hasPoped = true;
    } else if (orders[i] === balls[right]) {
      answer.push(balls[right--]);
      hasPoped = true;
    }

    if (!hasPoped) {
      queue.push(orders[i]);
    } else {
      while (true) {
        const leftIdx = queue.findIndex((el) => el === balls[left]);
        const rightIdx = queue.findIndex((el) => el === balls[right]);
        if (leftIdx >= 0) {
          while (queue[0] !== balls[left]) {
            queue.push(queue.shift());
          }
          answer.push(queue.shift());
          left++;
        } else if (rightIdx >= 0) {
          while (queue[0] !== balls[right]) {
            queue.push(queue.shift());
          }
          answer.push(queue.shift());
          right--;
        } else {
          break;
        }
      }
    }
  }

  return answer;
}
