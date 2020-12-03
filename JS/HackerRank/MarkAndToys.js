// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function maximumToys(prices, k) {
  let count = 0;
  prices.sort((a, b) => a - b);

  for (const price of prices) {
    k -= price;
    if (k >= 0) count++;
    else break;
  }
  return count;
}
