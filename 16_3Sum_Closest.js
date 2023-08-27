const threeSumClosest = (nums, target) => {
  let closest = Infinity;

  if (nums.length < 3) {
    console.log(0);
    return 0;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      closest =
        Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  console.log(closest);
  return closest;
};

threeSumClosest([-1, 2, 1, -4], 1);
threeSumClosest([0, 0, 0], 1);
