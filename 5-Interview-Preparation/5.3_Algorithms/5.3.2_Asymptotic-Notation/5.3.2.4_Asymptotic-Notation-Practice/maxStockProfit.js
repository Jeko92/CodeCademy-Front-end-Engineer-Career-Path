/*
Maximize Stock Trading Profit
Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one
should have bought a share and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.

For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit.
If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), the function would return [1, 4].
 */

function maxProfitDays(stockPrices) {
  let profit = 0;
  let buyDay; //the day we buy
  let sellDay; //the day we sell

  // loop day to buy i from day 0 to last day in the array
  for (let i = 0; i < stockPrices.length; i++) {
    // loop day to sell from day i+1 to last day in the array
    for (let j = i + 1; j < stockPrices.length; j++) {
      //test whether the profit on the 2 days is higher than the maximum previous profit
      if (stockPrices[j] - stockPrices[i] > profit) {
        profit = stockPrices[j] - stockPrices[i];
        buyDay = i;
        sellDay = j;
      }
    }
  }
  return [buyDay, sellDay];
}

console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]));
