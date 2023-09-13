const maxProfix = (prices) => {
  let mpr = 0;
  let mpf = 0;
  let res = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    mpr = Math.max(mpr, prices[i]);
    mpf += mpr - prices[i];
    if (mpr - prices[i] > 0) {
      mpr = 0;
    }
  }

  console.log(prices, mpf);
};

maxProfix([7, 1, 5, 3, 6, 4]);
maxProfix([1, 2, 3, 4, 5]);
maxProfix([7, 6, 4, 3, 1]);
