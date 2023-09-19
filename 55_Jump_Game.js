// // Greedy
// const canJump = (nums) => {
//   let i = 0;
//   let max = 0;
//   let target = nums.length - 1;

//   while (i <= target) {
//     max = Math.max(max, i + nums[i]);

//     if (max >= target) {
//       return true;
//     }

//     if (max <= i && nums[i] === 0) {
//       return false;
//     }
//     i++;
//   }
// };

// Recursive
// const canJump = (nums) => {
//   const len = nums.length;
//   const recurs = (i) => {
//     if (i === len - 1) return true;
//     if (nums[i] === 0) return false;

//     const maxJump = Math.min(i + nums[i], len - 1);
//     for (let j = i + 1; j <= maxJump; j++) {
//       if (recurs(j)) {
//         return true;
//       }
//     }
//     return false;
//   };

//   let res = recurs(0);
//   console.log(nums, res);
//   return res;
// };

// // Recursive + Dynamic Programming
// const canJump = (nums) => {
//   let len = nums.length;
//   let dp = Array(len).fill(0);
//   dp[len - 1] = 1;

//   const recurs = (i) => {
//     if (dp[i] === 1) {
//       return true;
//     } else if (dp[i] === -1) {
//       return false;
//     }

//     let maxJump = Math.min(i + nums[i], len - 1);
//     for (let j = i + 1; j <= maxJump; j++) {
//       if (recurs(j)) {
//         dp[i] = 1;
//         return true;
//       }
//     }
//     dp[i] = -1;
//     return false;
//   };

//   let res = recurs(0);
//   // console.log(nums, dp, res);
//   return res;
// };

// // Dynamic Programming(Bottom-Up)
// const canJump = (nums) => {
//   let len = nums.length;
//   let dp = Array(len).fill(0);
//   dp[len - 1] = 1;

//   for (let i = len - 2; i >= 0; i--) {
//     let maxJump = Math.min(i + nums[i], len - 1);
//     for (let j = i + 1; j <= maxJump; j++) {
//       if (dp[j] === 1) {
//         dp[i] = 1;
//         break;
//       }
//       dp[i] = -1;
//     }
//   }

//   return dp[0] === 1;
// };

//Greedy 02
const canJump = (nums) => {
  let maxJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxJump) {
      maxJump = i;
    }
  }

  return maxJump === 0;
};

canJump([0]);
canJump([1]);
canJump([1, 2]);
canJump([3, 0, 0, 0, 0, 2, 1]);
canJump([3, 0, 8, 2, 0, 0, 1]);
canJump([1, 0, 1, 0]);
canJump([0, 2, 3]);
canJump([2, 5, 0, 0]);
canJump([3, 2, 1, 0, 4]);
canJump([2, 3, 1, 1, 4]);
// canJump([1, 2, 0]);
// canJump([1, 1, 0]);
// canJump([2, 0, 0]);
// canJump([1, 0, 0]);
// canJump([2, 2, 1, 1, 4]);
// canJump([2, 2, 1, 0, 4]);
// canJump([3, 2, 2, 1, 0]);
// canJump([3, 2, 1, 5, 4]);
// canJump([0, 2, 1, 5, 4]);
