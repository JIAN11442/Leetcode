// const canJump = (nums) => {
//   let i = 0;
//   let res = false;

//   const reachTarget = (nums, i) => {
//     let reach = true;
//     let j = i;

//     while (nums[j] < nums.length - 1 - j) {
//       j += nums[j];
//       if (nums[j] === 0) {
//         reach = false;
//         break;
//       }
//     }

//     // console.log(nums, i, j, reach);
//     return reach;
//   };

//   if (nums.length === 1) {
//     res = true;
//   } else if (nums[0] === 0) {
//     res = false;
//   } else {
//     while (!res && i < nums.length - 2) {
//       res = reachTarget(nums, i);
//       i++;
//     }
//   }

//   console.log(nums, res);
//   return res;
//   // console.log(`-----------`);
// };

const canJump = (nums) => {
  let i = 0;
  let max = 0;
  let target = nums.length - 1;

  while (i <= target) {
    max = Math.max(max, i + nums[i]);

    if (max >= target) {
      return true;
    }

    if (max <= i && nums[i] === 0) {
      return false;
    }
    i++;
  }
};

// canJump([0]);
// canJump([1]);
// canJump([1, 2]);
// canJump([3, 0, 0, 0, 0, 2, 1]);
// canJump([3, 0, 8, 2, 0, 0, 1]);
// canJump([1, 0, 1, 0]);
// canJump([0, 2, 3]);
// canJump([2, 5, 0, 0]);
// canJump([3, 2, 1, 0, 4]);
// canJump([2, 3, 1, 1, 4]);
// canJump([1, 2, 0]);
// canJump([1, 1, 0]);
// canJump([2, 0, 0]);
// canJump([1, 0, 0]);
// canJump([2, 2, 1, 1, 4]);
// canJump([2, 2, 1, 0, 4]);
// canJump([3, 2, 2, 1, 0]);
// canJump([3, 2, 1, 5, 4]);
// canJump([0, 2, 1, 5, 4]);
