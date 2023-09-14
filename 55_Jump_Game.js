const canJump = (nums) => {
  let jumpN = 0;

  console.log(nums);
  for (let i = 0; nums[i] < nums.length - 1 - i; i++) {
    console.log(jumpN, i);
    if (nums[i] === 0) {
      console.log(false);
      console.log(`----------`);
      return false;
    }

    i += nums[i] - 1;
    jumpN++;
  }
  console.log(true);
  console.log(`----------`);
  return true;
};

canJump([2, 5, 0, 0]);
// canJump([1, 2, 0]);
// canJump([1, 1, 0]);
// canJump([2, 0, 0]);
// canJump([1, 0, 0]);
// canJump([2, 3, 1, 1, 4]);
// canJump([2, 2, 1, 1, 4]);
// canJump([3, 2, 1, 0, 4]);
// canJump([3, 2, 2, 1, 0]);
// canJump([3, 2, 1, 5, 4]);
// canJump([0, 2, 1, 5, 4]);
