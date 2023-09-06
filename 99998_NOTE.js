// #18

// #17

// const letterCombinations = (digits) => {
//   let maps = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   let result = [];

//   // Depth First Search
//   const dfs = (i, digits, slate) => {
//     if (i === digits.length) {
//       result.push(slate.join(""));
//     } else {
//       let chars = maps[digits[i]];
//       for (let char of chars) {
//         slate.push(char);
//         dfs(i + 1, digits, slate);
//         slate.pop();
//       }
//     }
//   };

//   dfs(0, digits, []);
//   console.log(result);
// };

// letterCombinations("23");
// letterCombinations("");

// #16

// const threeSumClosest = (nums, target) => {
//   let closest = Infinity;
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     let j = i + 1;
//     let k = nums.length - 1;

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];
//       closest =
//         Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;

//       if (sum > target) {
//         k--;
//       } else {
//         j++;
//       }
//     }
//   }

//   console.log(closest);
//   return closest;
// };

// threeSumClosest([-1, 2, 1, -4], 1);
// threeSumClosest([0, 0, 0], 1);

// #15

// const threeSum = (nums) => {
//   let target = 0;
//   let result = [];
//   nums = nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     let j = i + 1;
//     let k = nums.length - 1;

//     // if (nums[i] === nums[i + 1]) i++;
//     if (nums[i] === nums[i - 1]) continue;

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k];
//       if (sum === target) {
//         result.push([nums[i], nums[j], nums[k]]);
//         j++;
//       } else if (sum > target) {
//         k--;
//       } else {
//         j++;
//       }
//     }
//   }
//   console.log(result);
//   return result;
// };

// threeSum([0, 1, 1]);
// threeSum([0, 0, 0]);
// threeSum([-1, 0, 1, 2, -1, -4]);

// #14

// const longestCommonPrefix = (strs) => {
//   // solution 01 : use .every() function get ans
//   let i = 0;
//   let prefix = "";
//   while (
//     strs.every((str) => str !== "") &&
//     strs.every((str) => str[i] === strs[0][i])
//   ) {
//     prefix += strs[0][i];
//     i++;
//   }
//   console.log(prefix);
//   return prefix;
// };

// const longestCommonPrefix = (strs) => {
//   // solution 02:use reduce
//   let prefix = strs.reduce((prev, next) => {
//     let i = 0;
//     while (prev[i] && next[i] && prev[i] === next[i]) {
//       i++;
//     }
//     return prev.slice(0, i);
//   });

//   console.log(prefix);
//   return prefix;
// };

// longestCommonPrefix([""]);
// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["dog", "racecar", "car"]);

// #13

// const romanToInt = (str) => {
//   let maps = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let int = 0;

//   for (let i = 0; i < str.length; i++) {
//     int += maps[str[i]] < maps[str[i + 1]] ? maps[str[i]] * -1 : maps[str[i]];
//   }

//   console.log(str, int);
// };

// romanToInt("III");
// romanToInt("LVIII");
// romanToInt("MCMXCIV");

// #12

// const intToRoman = (num) => {
//   let maps = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   let roman = "";

//   Object.entries(maps).map(([letter, n], index) => {
//     let val = num / n;
//     if (val >= 1) {
//       roman += letter.repeat(Math.floor(val));
//     }
//     num %= n;
//   });

//   console.log(roman);
//   return roman;
// };

// intToRoman(3);
// intToRoman(1998);

// #11

// const maxArea = (height) => {
//   let i = 0;
//   let j = height.length - 1;
//   let maxArea = 0;
//   while (i < j) {
//     let h = Math.min(height[i], height[j]);
//     let w = j - i;

//     let currentArea = h * w;
//     if (currentArea > maxArea) {
//       maxArea = currentArea;
//     }

//     height[i] < height[j] ? i++ : j--;
//   }

//   console.log(maxArea);
//   return maxArea;
// };

// maxArea([1, 1]);
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

// #10

// const isMatch = (s, p) => {
//   if (!p) {
//     console.log(!s);
//     return !s;
//   }

//   hasFirstCharMatch = (Boolean(s) && p[0] === ".") || p[0] === s[0];

//   if (p[1] === "*") {
//     return (
//       isMatch(s, p.slice(2)) || (hasFirstCharMatch && isMatch(s.slice(1), p))
//     );
//   }

//   return hasFirstCharMatch
//     ? isMatch(s.slice(1), p.slice(1))
//     : hasFirstCharMatch;
// };

// isMatch("aa", "a");
// isMatch("aa", "a*");
// isMatch("aa", ".*");

// #9

// const isPalindrome = (x) => {
//   let reverse = x.toString().split("").reverse().join("");
//   let isPalindrome = x.toString() === reverse ? true : false;
//   console.log(x.toString(), reverse, isPalindrome);
//   return isPalindrome;
// };

// const isPalindrome = (x) => {
//   let val = x;
//   let reverse = 0;

//   while (val > 0) {
//     let digit = val % 10;
//     reverse = reverse * 10 + digit;
//     val = ~~(val / 10);
//   }

//   console.log(x === reverse);
//   return x === reverse;
// };

// isPalindrome(10);
// isPalindrome(121);
// isPalindrome(-121);

// #8

// const myAtoi = (s) => {
//   let result = 0;
//   let MAX_32BIT = Math.pow(2, 31) - 1;
//   let MIN_32BIT = Math.pow(-2, 31);

//   let num = s.trimLeft().match(/^[-\+]?\d+/);
//   result =
//     num !== null
//       ? num[0] > MAX_32BIT
//         ? MAX_32BIT
//         : num[0] < MIN_32BIT
//         ? MIN_32BIT
//         : num[0]
//       : 0;

//   console.log(result);
//   return result;
// };

// myAtoi("42");
// myAtoi(" -42");
// myAtoi(" -4193 with words");
// myAtoi(" -4193287978293 with words");
// myAtoi(" 4193287978293 with words");
// myAtoi("  with words");

// #7

// const reverse = (x) => {
//   let reverse =
//     parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
//   let result =
//     reverse > Math.pow(2, 31) - 1 || reverse < Math.pow(-2, 31) ? 0 : reverse;
//   console.log(result);
//   return result;
// };

// reverse(123);
// reverse(-123);
// reverse(120);
// reverse(1206000102021);

// #6

// const convert = (s, numRow) => {
//   let count = 0;
//   let direction = false;
//   let rArray = new Array(numRow).fill("");

//   for (let i = 0; i < s.length; i++) {
//     rArray[count] += s[i];
//     if (count <= 0 || count >= numRow - 1) {
//       direction = !direction;
//     }
//     direction ? count++ : count--;
//   }
//   console.log(rArray, "->", rArray.join(""));
//   return rArray.join("");
// };

// convert("PAYPALISHIRING", 3);

// #5

// const longestPalindrome = (s) => {
//   let currentStr = "";
//   let maxLStr = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j of [0, 1]) {
//       let left = i;
//       let right = i + j;
//       while (left >= 0 && s[left] === s[right]) {
//         left--;
//         right++;
//       }
//       currentStr = s.substring(left + 1, right);
//       maxLStr = currentStr.length > maxLStr.length ? currentStr : maxLStr;
//     }
//   }
//   console.log(maxLStr);
//   return maxLStr;
// };

// longestPalindrome("babad");
// longestPalindrome("cbbd");

// #4

// const findMedianSortedArrays = (num1, num2) => {
//   let mArr = num1.concat(num2).sort((a, b) => a - b);
//   let n = mArr.length;
//   let result = 0;
//   if (mArr.length % 2 === 0) {
//     result = (mArr[n / 2 - 1] + mArr[(n + 2) / 2 - 1]) / 2;
//   } else {
//     result = mArr[(n + 1) / 2 - 1];
//   }

//   console.log(result);
//   return result;
// };

// findMedianSortedArrays([1, 3], [2]);
// findMedianSortedArrays([1, 2], [3, 4]);

// #3

// const lengthOfLongestSubstring = (s) => {
//   let currentStr = "";
//   let maxStr = "";
//   for (let i = 0; i < s.length; i++) {
//     let index = currentStr.indexOf(s[i]);

//     if (index > -1) {
//       currentStr = currentStr.slice(index + 1);
//     }

//     currentStr += s[i];

//     if (currentStr.length > maxStr.length) {
//       maxStr = currentStr;
//     }
//   }

//   console.log(maxStr.length);
//   return maxStr.length;
// };

// lengthOfLongestSubstring("bbbbb");
// lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring("abcabcbb");

// #2

// class ListNode {
//   constructor(val, next = null) {
//     (this.val = val), (this.next = next);
//   }
// }

// const addTwoNumbers = (l1, l2) => {
//   let list = new ListNode(0);
//   let head = list;
//   let sum = 0;
//   let carry = 0;
//   let result = [];

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
//       sum = sum - 10;
//     }

//     head.next = new ListNode(sum);
//     head = head.next;

//     sum = carry;
//     carry = 0;
//   }

//   while (list.next !== null) {
//     result.push(list.next.val);
//     list.next = list.next.next;
//   }

//   console.log(result);
// };

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// addTwoNumbers(l1, l2);

// #1

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     let val = target - nums[i];
//     let index = nums.indexOf(val);

//     if (index > -1 && index !== i) {
//       let result = [i, index].sort((a, b) => a - b);
//       console.log(result);
//       return result;
//     }
//   }
// };

// twoSum([3, 3], 6);
// twoSum([3, 2, 4], 6);
// twoSum([2, 7, 11, 15], 9);
