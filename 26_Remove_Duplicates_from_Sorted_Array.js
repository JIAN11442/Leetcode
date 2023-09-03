// // Solution 1
// const removeDuplicates = (nums) => {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[j] !== nums[i]) {
//       nums[++j] = nums[i];
//     }
//   }

//   console.log(nums, j, j++, ++j);
//   return ++j;
// };

// // Solution 2
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(nums, nums.length);
//   return nums.length;
// };

removeDuplicates([1, 1, 2]);
removeDuplicates([1, 1, 1, 1]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
