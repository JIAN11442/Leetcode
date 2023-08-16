// #5

const longestPalindrome = (s) => {
  for (let i = 0; i < s.length; i++) {}
};

longestPalindrome("babad");

// #4

// const findMedianSortedArrays = (num1, num2) => {
//   let result;
//   let ma = num1.concat(num2).sort((a, b) => a - b);
//   let n = ma.length;
//   if (ma.length % 2 === 0) {
//     result = (ma[n / 2 - 1] + ma[(n + 2) / 2 - 1]) / 2;
//   } else {
//     result = ma[(n + 1) / 2 - 1];
//   }
//   console.log(result);
//   return result;
// };

// findMedianSortedArrays([1, 2], [3, 4]);

// #3

// const lengthOfLongestSubstring = (s) => {
//   let maxStr = "";
//   let currentStr = "";

//   for (let i = 0; i < s.length; i++) {
//     let index = currentStr.indexOf(s[i]);
//     if (index > -1) {
//       currentStr = currentStr.substring(index + 1);
//     }
//     currentStr += s[i];
//     if (currentStr.length > maxStr.length) {
//       maxStr = currentStr;
//     }
//   }
//   console.log(maxStr);
//   return maxStr;
// };

// lengthOfLongestSubstring("bbbbb");

// #2 - minus

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// const minusTwoNumbers = (l1, l2) => {
//   let carry = 0;
//   let sum = 0;
//   let list = new ListNode(0);
//   let value = list;
//   let result = [];

//   while (l1 !== null || l2 !== null || sum > 0) {
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2 !== null) {
//       sum -= l2.val;
//       l2 = l2.next;
//     }

//     if (sum < 0) {
//       carry = -1;
//       sum = sum + 10;
//     }

//     value.next = new ListNode(sum);
//     value = value.next;

//     sum = carry;
//     carry = 0;
//   }
//   while (list.next !== null) {
//     result.push(list.next.val);
//     list = list.next;
//   }
//   console.log(result);
//   return list.next;
// };

// let l2 = new ListNode(
//   9,
//   new ListNode(
//     9,
//     new ListNode(
//       9,
//       new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
//     )
//   )
// );

// let l1 = new ListNode(
//   8,
//   new ListNode(
//     9,
//     new ListNode(
//       9,
//       new ListNode(
//         9,
//         new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
//       )
//     )
//   )
// );
// minusTwoNumbers(l1, l2);

// #2 - adding

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// const addTwoNumbers = (l1, l2) => {
//   let sum = 0;
//   let carry = 0;
//   let list = new ListNode(0);
//   let value = list;

//   while (l1 !== null || l2 !== null || sum > 0) {
//     if (l1 !== null) {
//       sum = sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum = sum += l2.val;
//       l2 = l2.next;
//     }

//     if (sum >= 10) {
//       carry = 1;
//       sum = sum - 10;
//     }

//     value.next = new ListNode(sum);
//     value = value.next;

//     sum = carry;
//     carry = 0;
//   }
//   // console.log(list.next);
//   return list.next;
// };

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// addTwoNumbers(l1, l2);

// #1

// const twoSums = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     let val = target - nums[i];
//     let index = nums.indexOf(val);
//     if (index > -1 && i !== index) {
//       console.log([i, index]);
//       return [i, index];
//     }
//   }
// };

// twoSums([2, 7, 11, 15], 9);
// twoSums([3, 2, 4], 6);
// twoSums([3, 3], 6);
