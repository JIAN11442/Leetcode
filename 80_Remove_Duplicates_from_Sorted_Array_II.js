// Solution 1 : 用 while 表示
// const removeDuplicates = (nums) => {
//   let i = 2;
//   let k = i;
//   if (nums.length <= 2) {
//     return nums.length;
//   }

//   while (i < nums.length) {
//     if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i];
//       k++;
//       i++;
//     } else {
//       i++;
//     }
//   }

//   return k;
// };

// Solution 2 : 用 for 表示
const removeDuplicates = (nums) => {
  let k = 2;

  if (nums.length <= 2) {
    return nums.length;
  } else {
    for (let i = 2; i < nums.length; i++) {
      if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
        nums[k] = nums[i];
        k++;
      }
    }
  }

  return k;
};

removeDuplicates([1, 1]);
removeDuplicates([1, 1, 1]);
removeDuplicates([1, 1, 1, 2, 2, 3]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);

// 有問題的解法(一開始自己想的 T.T)
// const removeDuplicates = (nums) => {
//   if (nums.length <= 2) {
//     console.log(nums, nums.length);
//     return nums.length;
//   }

//   let i = 1;
//   let r = 0;
//   let l = 0;
//   while (i < nums.length) {
//     r = i + 1;
//     l = i - 1;
//     if (nums[r] !== nums[l]) {
//       i += 2;
//     } else {
//       while (nums[l] === nums[r]) {
//         r++;
//       }
//       let j = 1;
//       while (r < nums.length) {
//         nums[i + j] = nums[r];
//         j++;
//         r++;
//       }
//       i += 2;
//     }
//   }

//   console.log(nums, ++l);
//   return ++l;
// };
