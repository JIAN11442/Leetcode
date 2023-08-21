const maxSubArray = (nums) => {
  let vals = [...nums];
  let sum = vals[0];

  for (let i = 1; i < vals.length; i++) {
    vals[i] = Math.max(vals[i - 1] + vals[i], vals[i]);
    sum = Math.max(sum, vals[i]);
  }
  console.log(nums);
  console.log(vals);
  console.log(sum);
  return sum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
