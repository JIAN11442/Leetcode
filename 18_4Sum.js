const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          while (nums[k] === nums[k + 1]) k++;
          while (nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum > target) {
          l--;
        } else {
          k++;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  console.log(result);
  return result;
};

fourSum([2, 2, 2, 2, 2], 8);
fourSum([1, 0, -1, 0, -2, 2], 0);
fourSum([-2, -1, -1, 1, 1, 2, 2], 0);
