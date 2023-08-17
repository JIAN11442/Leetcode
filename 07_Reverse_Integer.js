const reverse = (x) => {
  let result;
  let val = parseInt(x.toString().split("").reverse().join(""));

  // [位數通式是：2^(n-1)，其中最大值為：2^(n-1)-1；最小值為：-2^(n-1)]
  // 因此，32位整數最大值是 (2^31)-1；最小值是 (2^31)*-1
  val > Math.pow(2, 31) - 1 || val < Math.pow(2, 31) * -1
    ? (result = 0)
    : (result = val);

  console.log(x, "->", result * Math.sign(x));
  return result * Math.sign(x);
};

reverse(123);
reverse(120);
reverse(-123);
reverse(-120);
reverse(1534236469);
