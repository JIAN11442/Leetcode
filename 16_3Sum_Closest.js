// const threeSumClosest = (nums, target) => {
//   let result = 0;

//   //   if (nums.length < 3) {
//   //     console.log(result);
//   //     return result;
//   //   }
//   //   for (let i = 0; i < nums.length - 2; i++) {
//   //     let j = i + 1;
//   //     let k = nums.length - 1;

//   //   }

// };

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target))
        closest = localSum;
      if (localSum > target) right--;
      else left++;
      console.log("Before", i, left, right, localSum, closest);

      console.log(`-------`);
    }
  }
  return closest;
};

threeSumClosest([-1, 2, 1, -4], 1);
// threeSumClosest([0, 0, 0], 1);
