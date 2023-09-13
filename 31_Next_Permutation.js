const nextPermutation = (nums) => {
  for (let i = nums.length - 1; nums[i] >= nums[i + 1]; i--) {
    console.log(i, nums[i]);
  }
};

nextPermutation([1, 2, 3]);
// nextPermutation([3, 2, 1]);
// nextPermutation([1, 1, 5]);
// nextPermutation([1, 2, 3, 4]);

// 1,2,3,4
// 1,3,2,4

// 3,1,2
// 3,2,1
