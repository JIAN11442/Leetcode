// #2

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// // While Solution
// const addTwoNumbers = (l1, l2) => {
//   let list = new ListNode(0);
//   let head = list;
//   let sum = 0;
//   let carry = 0;
//   let res = [];
//   while (l1 !== null || l2 !== null || sum > 0) {
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2 !== null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }

//     if (sum >= 10) {
//       carry += 1;
//       sum -= 10;
//     }

//     head.next = new ListNode(sum);
//     head = head.next;

//     sum = carry;
//     carry = 0;
//   }

//   while (list.next) {
//     res.push(list.next.val);
//     list.next = list.next.next;
//   }

//   console.log(res);
// };

// // Recursive Solution
// const addTwoNumbers = (l1, l2) => {
//   let list = new ListNode(0);
//   let head = list;
//   let sum = 0;
//   let carry = 0;
//   let res = [];

//   const recus = (l1, l2, head) => {
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }

//     if (sum >= 10) {
//       carry += 1;
//       sum -= 10;
//     }

//     head.next = new ListNode(sum);
//     head = head.next;

//     sum = carry;
//     carry = 0;

//     if (l1 !== null || l2 !== null || sum > 0) {
//       recus(l1, l2, head);
//     }
//   };
//   recus(l1, l2, head);

//   //   while (list.next) {
//   //     res.push(list.next.val);
//   //     list.next = list.next.next;
//   //   }

//   //   console.log(res);

//   return list.next;
// };

// addTwoNumbers(
//   new ListNode(2, new ListNode(4, new ListNode(3))),
//   new ListNode(5, new ListNode(6, new ListNode(4)))
// );

// addTwoNumbers(new ListNode(0), new ListNode(0));
// addTwoNumbers(
//   new ListNode(
//     9,
//     new ListNode(
//       9,
//       new ListNode(
//         9,
//         new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
//       )
//     )
//   ),
//   new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
// );

// #1

// const twoSums = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     let val = target - nums[i];
//     let index = nums.indexOf(val);

//     if (index >= 0 && i !== index) {
//       console.log([i, index]);
//       return [i, index];
//     }
//   }
// };

// twoSums([2, 7, 11, 15], 9);
// twoSums([3, 2, 4], 6);
// twoSums([3, 3], 6);
