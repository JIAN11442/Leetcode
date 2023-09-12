// #30

// const findSubstring = (s, words) => {
//   let l = words[0].length;
//   let count = {};
//   let res = [];

//   for (let w of words) {
//     count[w] ? (count[w] = ++count[w]) : (count[w] = 1);
//   }

//   const csl = (...args) => {
//     for (let i = 0; i < args.length; i++) {
//       console.log(`Arg ${i + 1}:`, args[i]);
//     }
//     console.log("-------------------");
//   };

//   const recus = (i, j, l, s, count) => {
//     let stack = {};
//     let boolean = false;
//     while (!boolean) {
//       let str = s.substring(j, j + l);
//       //   csl(i, j, str, stack, count, boolean);

//       if (words.indexOf(str) >= 0) {
//         if (stack[str]) {
//           if (stack[str] < count[str]) {
//             stack[str] = ++stack[str];
//             j += l;
//           } else {
//             i += l;
//             j = i;
//             break;
//           }
//         } else {
//           stack[str] = 1;
//           j += l;

//           if (boolean) {
//             break;
//           }
//         }
//       } else {
//         i += l;
//         j = i;
//         break;
//       }
//       boolean = Object.keys(count).every((item) => count[item] === stack[item]);
//       csl(i, j, str, stack, count, boolean, res);
//     }
//     if (boolean) res.push(i);

//     if (j < s.length) recus(i, j, l, s, count);
//   };

//   for (let i = 0; i < l; i++) {
//     let j = i;
//     recus(i, j, l, s, count);
//   }
//   console.log("res: ", res);
//   return res;
// };

// #27

// const removeElement = (nums, val) => {
//   // Solution 1
//   // 不需要真的刪掉nums中與val相等的值,
//   // 只要把與val不相等的nums[i]依次按index排列即可，並計算不相等的次數有幾次即可

//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   return count;
// };

// const removeElement = (nums, val) => {
//   // Solution 2
//   // 可以真的拿掉與val相等的nums[i]

//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(val) >= 0) {
//       if (nums[i] === val) {
//         nums.splice(i, 1);
//         i--;
//       }
//     } else {
//       break;
//     }
//   }

//   return nums.length;
// };

// removeElement([3, 2, 2, 3], 3);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

// #26

// // Solution 1:直接拿掉一樣的
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }

//   return nums.length;
// };

// // Solution 2: 排列
// const removeDuplicates = (nums) => {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[j] !== nums[i]) {
//       nums[++j] = nums[i];
//     }
//   }
//   return ++j;
// };

// removeDuplicates([1, 1, 2]);
// removeDuplicates([1, 1, 1, 1]);
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// #15

// #14

// const longestCommonPrefix = (strs) => {
//   let i = 0;
//   let prefix = "";

//   if (!strs.length) {
//     console.log("");
//     return "";
//   }

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

// ------------------------------------------------------------

// const longestCommonPrefix = (strs) => {
//   if (!strs.length) {
//     console.log("");
//     return "";
//   }

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

// longestCommonPrefix("");
// longestCommonPrefix([""]);
// longestCommonPrefix(["", ""]);
// longestCommonPrefix(["a", "ab"]);
// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["dog", "racecar", "car"]);

// #13

// const romanToInt = (str) => {
//   let symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

//   let num = 0;
//   for (let i = 0; i < str.length; i++) {
//     num +=
//       symbols[str[i]] < symbols[str[i + 1]]
//         ? symbols[str[i]] * -1
//         : symbols[str[i]];
//   }

//   console.log(str, num);
// };

// romanToInt("III");
// romanToInt("LVIII");
// romanToInt("MCMXCIV");

// #12

// const IntToRoman = (num) => {
//   let symbols = {
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

//   let romanStr = "";
//   Object.entries(symbols).map(([letter, n]) => {
//     if (num / n >= 1) {
//       romanStr += letter.repeat(Math.floor(num / n));
//       num %= n;
//     }
//   });

//   console.log(romanStr);
//   return romanStr;
// };

// IntToRoman(1234);
// IntToRoman(1998);
// IntToRoman(3);
// IntToRoman(58);
// IntToRoman(1998);

// #11

// const maxArea = (height) => {
//   let maxArea = 0;
//   let i = 0;
//   let j = height.length - 1;
//   let prevHeight = 0;
//   let prevWidth = 0;

//   while (i < j) {
//     let h = Math.min(height[i], height[j]);
//     let w = j - i;

//     if (h > prevHeight || w > prevWidth) {
//       maxArea = Math.max(maxArea, h * w);
//     }

//     height[i] < height[j] ? i++ : j--;
//   }
//   console.log(maxArea);
//   return maxArea;
// };

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

// #10

// const isMatch = (s, p) => {
//   let result = "";

//   // 判斷p有沒有值，要是沒有就再看s有沒有值。
//   // 如果s也沒值，return true，因爲 s = ''，p = '' => MATCHES
//   // 反之，return false，因爲 s = '?'，p = '' => DON'T MATCHES

//   if (!p) {
//     result = !s;
//     return !s;
//   }

//   // 如果p有值，再看p[0]的值是不是'.'，或是與s[0]的值相等
//   // Boolean(s)能直接return回true/false，如果只是 s && ...的話，儅s=''，也會被當作'true'並執行後面的判斷
//   // 而且Boolea(s)能直接返回的話，就能判斷 true && true = true; true && false = false等判斷
//   let hasFirstCharMatch = Boolean(s) && (p[0] === "." || p[0] === s[0]);

//   // 如果p有值，且p[1] == '*'，有兩個選擇
//   // 第一個選擇是：無視或跳過【...?*】前的值（當作'*'是零次，相當於沒有前面的值），讓 p =【?*...】後面的值后，再投入isMatch(s,p) function裏遞歸(Recursive)
//   // 第二個選擇是：'*'是一次，且'*'前的值，也就是p[0] === '.'或 p[0] === s[0]，這樣的話可以當作s[0]成功過關，去除s[0]后剩下的只一樣再投入isMatch(s,p) function裏遞歸
//   // 需要注意的是：第一個選擇執行時，再次遞歸后也一定也執行第一選擇，也可能執行第二選擇，一切看當時候的參數【O1 ?=> O2 ?=> O1 ?=> O1....】
//   // 需要注意的是：儅第一個選擇執行到最後的結果是'true'時，就不會執行第二選擇（沒必要，因爲第一選擇開始的支綫已經跑完了所有s[i]，得出的答案是'true'）
//   if (p[1] === "*") {
//     return (
//       // isMatch(s, p.slice(2)) || (hasFirstCharMatch && isMatch(s.slice(1), p))
//       isMatch(s, p.slice(2)) ||
//       (hasFirstCharMatch && isMatch(s.slice(1), p.slice(1)))
//     );
//   }

//   return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
// };

// isMatch("", ".a");
// isMatch("aa", "a*");
// isMatch("aa", ".*");

// #9

// const isPalindrome = (x) => {
//   let result =
//     x.toString() === x.toString().split("").reverse().join("") ? true : false;

//   console.log(x.toString(), x.toString().split("").reverse().join(""), result);
//   return result;
// };

// var isPalindrome = function (x) {
//   let reverse = 0;
//   let val = x;

//   while (val > 0) {
//     // 得到餘數（也就是得到最後一個數字 -> 因為是回文，所以也等於第一個數字）
//     let digit = val % 10;
//     // reverse*10 的用意是新增一個位數的空間，加上digit後，間接的換了位置
//     // 『x』 最後一個位置的數字成為『reverse』第一個位置的數字）
//     reverse = reverse * 10 + digit;
//     // 最後刪除『x』的最後位置的一個數字，並更新『x』，進入下一個迴圈判斷
//     // 『x / 10』 會得到除後的值（可能是整數、也可能是小數點）
//     // 『～～』是一種對數字進行 "double tilde" 運算的方式，也被稱為「雙補數運算」。這種操作會將數字的小數部分截斷，只保留整數部分。
//     // 因此『~~(x/10)』的結果就是取整數，忽略小數點，以這案例的含義來說就是去除原本『x』的最後一個數字
//     val = ~~(val / 10);
//   }

//   console.log(
//     "input:",
//     x,
//     "; reverse:",
//     reverse,
//     "; isPalindrome",
//     reverse == x
//   );
//   return reverse == x;
// };

// isPalindrome(121);
// isPalindrome(-121);
// isPalindrome(10);

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
