// // Solution 1：沒效率(超出運行時間)：
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

// // Solution 2：沒效率(超出運行時間)
// const rotate = (nums, k) => {
//   let count = 0;
//   while (count < k) {
//     let j = nums.pop();
//     nums.splice(0, 0, j);
//     count++;
//   }
//   return nums;
// };

// Solution 3 : 相對有效率『TC : O(N); SC : O(1)』
// const rotate = (nums, k) => {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     nums[i + k] = nums[i];
//   }

//   for (let j = k - 1; j >= 0; j--) {
//     nums[j] = nums.pop();
//   }

//   return nums;
// };

// Solution 4 : 相對有效率『TC: O(N); SC : O(1)』

const rotate = (nums, k) => {
  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };

  k %= nums.length;

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  console.log(nums);
  return nums;
};

rotate([-1], 2);
rotate([1, 2, 3, 4, 5], 6);
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1, -100, 3, 99], 2);
