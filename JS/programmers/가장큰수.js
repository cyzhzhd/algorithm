// https://programmers.co.kr/learn/courses/30/lessons/42746

// const numbers = [6, 10, 2];
// const numbers = [5, 30, 34, 3, 9];

// time over

// function solution(numbers) {
//   const permutation = permutations(numbers);
//   const answers = [];
//   permutation.forEach((arr) => {
//     answers.push(arr.reduce((a, b) => a + b, ''));
//   });
//   answers.sort((a, b) => b - a);
//   return answers[0];
// }

// console.log(solution(numbers));

// function permutations(arr) {
//   if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
//   return arr.reduce(
//     (acc, item, i) =>
//       acc.concat(
//         permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
//           item,
//           ...val,
//         ])
//       ),
//     []
//   );
// }

// function solution(numbers) {
//   numbers.sort((a, b) => {
//     console.log('asd', getFirstDigit(a), getFirstDigit(b));
//     if (getFirstDigit(a) < getFirstDigit(b)) {
//       console.log(getFirstDigit(a), getFirstDigit(b));
//       return true;
//     } else if (getFirstDigit(a) === getFirstDigit(b)) {
//       console.log('else if');
//       console.log(getFirstDigit(a), getFirstDigit(b));
//       console.log(a < b);
//       return a < b;
//     }
//   });
//   console.log(numbers);
//   return numbers.reduce((a, b) => a + b, '');
// }
// // console.log(solution(numbers));
// const test = [3, 23, 2, 5, 21, 4, 22];
// // const test = [2713, 272];
// // const test2 = [272, 2713];
// test.sort();
// // test2.sort();
// console.log(test);
// // console.log(test2);

// function getFirstDigit(number) {
//   let count = 0;
//   while (number > 10) {
//     number = number / 10;
//     count++;
//   }
//   const obj = { num: Math.floor(number), count };
//   return obj;
// }

// function compare(a, b) {
//   console.log('compare start');
//   let num1 = getFirstDigit(a);
//   let num2 = getFirstDigit(b);
//   console.log(a, b, num1, num2);
//   while (num1.num >= num2.num) {
//     if (num1.num === 0 && num2.num) break;
//     console.log('While');
//     console.log(a, b, num1, num2);
//     a -= num1.num * Math.pow(10, num1.count);
//     b -= num2.num * Math.pow(10, num2.count);
//     num1 = getFirstDigit(a);
//     num2 = getFirstDigit(b);
//   }
//   return num2.num - num1.num;
// }

// 두 숫자 a, b를 받았을 때, ab와 ba를 비교
// 만약 ab > ba 이면 위치 고정, ab < ba이면 b와 a의 위치를 바꿈
// O(n^2) sort를 이용할 계획

const numbers = [5, 30, 34, 3, 9];

// function sort(f, arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i += 1) {
//     for (let j = i + 1; j < len; j += 1) {
//       if (f(arr[i], arr[j])) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// }
// function solution(numbers) {
//   numbers.sort();
//   sort((a, b) => {
//     return (
//       Number(a.toString() + b.toString()) < Number(b.toString() + a.toString())
//     );
//   }, numbers);
//   return numbers.reduce((a, b) => a + b, '');
// }

function solution(numbers) {
  numbers.sort((a, b) =>
    Number(b.toString() + a.toString() - Number(a.toString() + b.toString()))
  );

  const answer = numbers.reduce((a, b) => a + b, '');
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([0, 0]));
console.log(solution([2, 3, 0]));
