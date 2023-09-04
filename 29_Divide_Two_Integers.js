// #Solution 1 : 沒效率，因爲是靠不斷叠加divisor來靠近divedend

// const divide = (dividend, divisor) => {
//   let count = 0;
//   let sumStack = Math.abs(divisor);
//   let MAX_32BITS = Math.pow(2, 31) - 1;
//   let MIN_32BITS = Math.pow(-2, 31);
//   let sign = Math.sign(dividend) * Math.sign(divisor);

//   const range = (count) => {
//     count =
//       sign * count > MAX_32BITS
//         ? MAX_32BITS
//         : sign * count < MIN_32BITS
//         ? MIN_32BITS
//         : sign * count;
//     return count;
//   };

//   if (Math.abs(divisor) === 1) {
//     console.log(range(Math.abs(dividend)));
//     return range(Math.abs(dividend));
//   }

//   while (sumStack <= Math.abs(dividend)) {
//     sumStack += Math.abs(divisor);
//     count++;
//   }

//   console.log(range(count));
//   return range(count);
// };

// Solution 2: 比較有效率，因爲是不斷靠進位ds(<<,相當於一直用 ds = ds * 2)來靠近dd

// 知識點：

// >> 右移运算符：

// x >> y 表示将 x 的二进制表示向右移动 y 位。
// 在这个算法中，dividend >> 1 表示将 dividend 向右移动一位，相当于将其除以 2（向下取整）。

// << 左移运算符：

// x << y 表示将 x 的二进制表示向左移动 y 位。
// 在这个算法中，base << 1 表示将 base 向左移动一位，相当于将其乘以 2。

const divide = (dividend, divisor) => {
  let count = 1;
  let dd = Math.abs(dividend);
  let ds = Math.abs(divisor);
  let stack = ds;
  let result = 0;
  let MAX_32BITS = Math.pow(2, 31) - 1;
  let MIN_32BITS = Math.pow(-2, 31);
  let sign = Math.sign(dividend) + Math.sign(divisor) === 0 ? -1 : 1;

  if (dividend === 0) {
    result = 0;
  } else if (ds === 1) {
    result = dd * sign;
  } else {
    while (dd >= ds) {
      count = 1;
      stack = ds;

      // 如果我们在 while 循环中使用 stack << 1，我们会得到以下结果：

      // 初始情况：stack = 2，dd = 2147483647。
      // 第一次迭代：stack = 4，dd = 2147483647。
      // 第二次迭代：stack = 8，dd = 2147483647。
      // ...
      // 当 stack 变为 2 的 30 次方时，
      // 它会溢出，因为 JavaScript 使用的是 32 位表示法，
      // 而 2 的 30 次方的结果超出了 32 位整数的范围。
      // 此时 stack << 1 的结果变为负数，即 -2147483648。

      // 因此這裏改爲使用 stack <= (dd >> 1)，这确保了在位运算时不会发生溢出。
      // 右移 1 位（dd >> 1）相当于将 dd 除以 2，因此它可以有效地表示 2147483647 的一半，而不会溢出为负数。

      // 这种方式可以避免在某些情况下陷入无限循环，因为位运算溢出会导致错误的结果。

      while (stack <= dd >> 1) {
        stack = stack << 1;
        count = count << 1;
      }
      result += count;
      dd -= stack;
    }
    result = result * sign;
  }

  result =
    result > MAX_32BITS
      ? MAX_32BITS
      : result < MIN_32BITS
      ? MIN_32BITS
      : result;

  // console.log(result);
  return result;
};

divide(10, 3);
divide(7, -3);
divide(1, 1);
divide(-1, 1);
divide(7, -3);
divide(-2147483648, 2);
divide(-2147483648, -1);
divide(-2147483648, 1);
