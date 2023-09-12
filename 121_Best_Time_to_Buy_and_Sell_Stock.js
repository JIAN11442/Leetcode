// Solution 1
// const maxProfit = (prices) => {
//   let maxProfit = 0;
//   let ideal_maxProfix = 0;

//   if (prices.indexOf(Math.max(...prices)) === 0) {
//     ideal_maxProfix =
//       Math.max(...prices.slice(1, prices.length)) - Math.min(...prices);
//   } else {
//     ideal_maxProfix = Math.max(...prices) - Math.min(...prices);
//   }

//   for (let i = 0; i < prices.length - 1; i++) {
//     let j = i + 1;
//     while (prices[j] > prices[i] && j < prices.length) {
//       let profix = prices[j] - prices[i];
//       if (profix > maxProfit) maxProfit = profix;
//       j++;
//     }
//   }
//   console.log(maxProfit);
//   return maxProfit;
// };

// Solution 2
// const maxProfit = (prices) => {
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = 0;

//   for (let i = 0; i < prices.length; i++) {
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   console.log(max);
//   return max;
// };

// Soluition 3
// 首先要明確一點，就是最大利潤一定是指在最高點賣出，最低點買入（所以從後面天數loop比較合理）
// 而且這裏的index代表的是天數，因此最高點的天數一定會在最低點前面，這樣才能實現獲利 - 重點
// 所以呢，如果我們從後面開始 for loop,同時，不斷更新最高點[max]的話
// 在已知最低點一定是在最高點前面天數，這樣我只要不斷用當前最高點值扣除當前loop值，並一樣不斷更新最大利潤即可得到結果
// 優點是只需要for loop一次就可以，時間複雜度是O(N);空間複雜度是O(1)
const maxProfit = (prices) => {
  let max = 0;
  let ans = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    ans = Math.max(ans, max - prices[i]);
  }

  console.log(ans);
  return ans;
};

maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([7, 4, 5, 3, 6, 4]);
// maxProfit([7, 6, 4, 3, 1]);
// maxProfit([2, 4, 1]);
