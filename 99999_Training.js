// #9

// const isPalindrome = (x) => {
//   let result =
//     x.toString() === x.toString().split("").reverse().join("") ? true : false;

//   console.log(x.toString(), x.toString().split("").reverse().join(""), result);
//   return result;
// };

var isPalindrome = function (x) {
  let reverse = 0;
  let val = x;

  while (val > 0) {
    // 得到餘數（也就是得到最後一個數字 -> 因為是回文，所以也等於第一個數字）
    let digit = val % 10;
    // reverse*10 的用意是新增一個位數的空間，加上digit後，間接的換了位置
    // 『x』 最後一個位置的數字成為『reverse』第一個位置的數字）
    reverse = reverse * 10 + digit;
    // 最後刪除『x』的最後位置的一個數字，並更新『x』，進入下一個迴圈判斷
    // 『x / 10』 會得到除後的值（可能是整數、也可能是小數點）
    // 『～～』是一種對數字進行 "double tilde" 運算的方式，也被稱為「雙補數運算」。這種操作會將數字的小數部分截斷，只保留整數部分。
    // 因此『~~(x/10)』的結果就是取整數，忽略小數點，以這案例的含義來說就是去除原本『x』的最後一個數字
    val = ~~(val / 10);
  }

  console.log(
    "input:",
    x,
    "; reverse:",
    reverse,
    "; isPalindrome",
    reverse == x
  );
  return reverse == x;
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);

// #8

// const myAtoi = (s) => {
//   let val = "";
//   let result = 0;
//   let lists = s.split(" ");
//   let isNum = (str) => {
//     let num = str.match(/-?\d+/);
//     num === null ? null : num;
//     return num;
//   };

//   console.log(lists);

//   for (let i = 0; i < lists.length; i++) {
//     if (lists[i] !== "" && isNum(lists[i]) === null) {
//       break;
//     }
//     val += lists[i];

//     if (val.length > 0) {
//       break;
//     }
//   }
//   result =
//     isNaN(parseInt(val)) === false
//       ? parseInt(val) > Math.pow(2, 31) - 1
//         ? Math.pow(2, 31) - 1
//         : parseInt(val) < Math.pow(2, 31) * -1
//         ? Math.pow(2, 31) * -1
//         : parseInt(val)
//       : 0;

//   console.log(result);
//   return result;
// };

// const myAtoi = (s) => {
//   let result = 0;
//   let MIN_32BIT_INTEGER = Math.pow(-2, 31);
//   let MAX_32BIT_INTEGER = Math.pow(2, 31) - 1;
//   // 正則表達式:
//   // '^' : 只抓第一個來match，符合的話就有值，否則就返回 null
//   // '-?' : 可選的負號（不強制）
//   // '[-\+]?' : 可選的正負號（不強制）
//   // '\d+' : 一個或多個數字字符
//   let isNum = s.trimLeft().match(/^[-\+]?\d+/);

//   if (isNum !== null) {
//     if (isNum[0] > MAX_32BIT_INTEGER) {
//       result = MAX_32BIT_INTEGER;
//     } else if (isNum[0] < MIN_32BIT_INTEGER) {
//       result = MIN_32BIT_INTEGER;
//     } else {
//       result = parseInt(isNum[0]);
//     }
//   }
//   console.log(result);
//   return result;
// };

// myAtoi(" .1");
// myAtoi(" +0 123");
// myAtoi("  -4193 with words ");
// myAtoi("  -41939874654 with words ");
// myAtoi("  41939874654 with words ");
// myAtoi(" as  41939874654 with words ");

// #7

// const reverse = (x) => {
//   let val = parseInt(Math.abs(x).toString().split("").reverse().join(""));
//   val > Math.pow(2, 31) - 1 || val < Math.pow(2, 31) * -1
//     ? (val = 0)
//     : (val = val * Math.sign(x));
//   console.log(x, "->", val);
//   return val;
// };

// reverse(-120);
// reverse(123);
// reverse(-123);
// reverse(5000000003);
// reverse(-5000000003);
// reverse(-500000003);

// #6

// const convert = (s, numRows) => {
//   let count = 0;
//   let direction = false;
//   let array = new Array(numRows).fill("");

//   if (numRows === 1 || s.length < numRows) {
//     console.log(s);
//     return s;
//   }

//   for (let i = 0; i < s.length; i++) {
//     array[count] += s[i];
//     if (count === numRows - 1 || count === 0) {
//       direction = !direction;
//     }
//     direction ? count++ : count--;
//   }
//   console.log(array.join(""));
//   return array.join("");
// };

// convert("ABC", 1);

// #5

// const longestPalindrome = (s) => {
//   let maxStr = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j of [0, 1]) {
//       let left = i;
//       let right = i + j;
//       // let times = 0;
//       while (left >= 0 && s[left] === s[right]) {
//         // times++;
//         left--;
//         right++;
//       }
//       // console.log(i, j, times, left, right, s.substring(left + 1, right));
//       let value = s.substring(left + 1, right);
//       if (value.length > maxStr.length) {
//         maxStr = value;
//       }
//     }
//   }
//   console.log(maxStr);
//   return maxStr;
// };

// longestPalindrome("babbab");

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
