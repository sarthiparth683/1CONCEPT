// leet code - best time to buy
let prices = [7, 6, 4, 3, 1];
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.lenght; i++) {
    if (prices[i] < min) {
      min = arr[i];
    }
    let profit = arr[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};
console.log(maxProfit(prices));
