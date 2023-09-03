// Solution 1
const removeElement = (nums, val) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  console.log(nums, j);
  return j;
};

// // Solution 2
// const removeElement = (nums, val) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(val) >= 0) {
//       if (nums[i] === val) {
//         nums.splice(i, 1);
//         i--;
//       }
//     } else {
//       break;
//     }
//   }
//   console.log(nums);
//   return nums.length;
// };

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
