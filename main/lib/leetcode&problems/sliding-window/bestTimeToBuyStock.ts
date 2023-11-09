const maxProfit = function (prices: number[]): number {
	let buy = 0,
		sell = 1,
		maxProfit = 0
	while (sell < prices.length) {
		if (sell < buy) {
			let currProfit = prices[sell] - prices[buy]
			maxProfit = Math.max(maxProfit, currProfit)
		} else {
			sell = buy
		}
		sell++
	}
	return maxProfit
}
