const maxProfit = (prices) => {
  let mpf = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      mpf += prices[i] - prices[i - 1];
    }
  }

  console.log(mpf);
  return mpf;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
