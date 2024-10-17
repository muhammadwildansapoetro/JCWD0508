/*
● You are given an array prices where prices[i] is the price of a given stock on the ith day.

● You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

● Example 1:
    ○ Input: prices = [7,1,5,3,6,4]
    ○ Output: 5
    ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

● Example 2:
    ○ Input: prices = [7,6,4,3,1]
    ○ Output: 0
    ○ Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maximumProfit(prices: number[]) {
    let maxProfit: number = 0 // initialize maximum profit
    let minPrice: number = Infinity // initialize minimum price with highest possible value

    // iterate through each price in input prices
    prices.forEach(price => {
        console.log(price);

        // update minPrice if current price < Infinity
        if (price < minPrice) {
            minPrice = price // update minimum price
            console.log(minPrice);
        } else {
            // calculate profit if sell in current price
            const profit: number = price - minPrice // current profit
            console.log(profit);

            // update maxProfit if found new maxProfit
            maxProfit = Math.max(maxProfit, profit) // get the max value between maxProfit and profit
            console.log(maxProfit);
        }
    })

    return maxProfit
}

const prices1: number[] = [7, 1, 5, 3, 6, 4]
// const prices2: number[] = [7, 6, 4, 3, 1]
// const prices3: number[] = [3, 2, 1]

console.log(maximumProfit(prices1));
// console.log(maximumProfit(prices2));
// console.log(maximumProfit(prices3));

