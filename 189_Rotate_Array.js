// const rotate = (nums, k) => {
//   let count = 0;
//   while (count < k) {
//     let j = nums[nums.length - 1];
//     for (let i = nums.length - 1; i > 0; i--) {
//       nums[i] = nums[i - 1];
//     }
//     nums[0] = j;
//     count++;
//   }
//   console.log(nums);
//   return nums;
// };

const rotate = (nums, k) => {
  let count = 0;
  while (count < k) {
    let j = nums.pop();
    nums.splice(0, 0, j);
    count++;
  }
  return nums;
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1, -100, 3, 99], 2);
