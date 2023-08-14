// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// const addTwoNumbers = (l1, l2) => {
//   let output = [];
//   let result = 0;
//   let decimal = 0;
//   for (let i = 0; i < l1.length; i++) {
//     if (l2[i] !== undefined) {
//       if (l1[i] + l2[i] + decimal >= 10) {
//         result = l1[i] + l2[i] + decimal - 10;
//         decimal = 1;
//       } else {
//         result = l1[i] + l2[i] + decimal;
//         decimal = 0;
//       }
//     } else {
//       if (l1[i] + decimal >= 10) {
//         result = l1[i] + decimal - 10;
//         decimal = 1;
//       } else {
//         result = l1[i] + decimal;
//         decimal = 0;
//       }
//     }
//     output.push(result);
//   }
//   if (decimal !== 0) {
//     output.push(1);
//   }
//   return output;
// };

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let list = new ListNode(0);
  let head = list;
  let sum = 0;
  let carry = 0;
  let result = [];

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  while (list.next !== null) {
    result.push(list.next.val);
    list.next = list.next.next;
  }
  console.log(result);
};

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

addTwoNumbers(l1, l2);
