// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// --------------------------------------------------------------------

// [SOLUTION 2]
const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const minusValue = target - nums[i];
    if (minusValue in map) {
      console.log([i, map[minusValue]]);
      //   return [i, map[minusValue]];
    }
    map[nums[i]] = i;
  }
  if (Object.entries(map).length === nums.length) {
    console.log("None available solution");
  }
};

twoSum([2, 7, 11, 15], 9);

// --------------------------------------------------------------------

// [SOLUTION 1]
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     const minusValue = target - nums[i];
//     const mValueIndex = nums.findIndex((num) => num === minusValue);
//     if (mValueIndex !== -1 && mValueIndex !== i) {
//       console.log(
//         `nums[${i}]:${nums[i]},nums[${mValueIndex}]:${nums[mValueIndex]}`
//       );
//       return [i, mValueIndex];
//     }
//   }
// };
