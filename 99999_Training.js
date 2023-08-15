const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const mValue = target - nums[i];
    if (nums.includes(mValue) && i !== nums.indexOf(mValue)) {
      console.log([i, nums.indexOf(mValue)]);
      return [i, nums.indexOf(mValue)];
    }
  }
};

twoSum([3, 2, 4], 6);

// --------------------------------------------------

// [Q2]
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
//   let head = list;

//   while (l1 !== null || l2 !== null || sum > 0) {
//     if (l1 !== null) {
//       sum = sum + l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum = sum + l2.val;
//       l2 = l2.next;
//     }

//     if (sum >= 10) {
//       carry = 1;
//       sum = sum - 10;
//     }

//     head.next = new ListNode(sum);
//     head = head.next;

//     sum = carry;
//     carry = 0;
//   }
// };

// const l1 = [9, 9, 9, 9, 9, 9, 9];
// const l2 = [9, 9, 9, 9];
