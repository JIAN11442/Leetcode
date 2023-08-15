// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// ------------------------------------------------------------

// aacabdkacaa = aca
// babadb = bab

const longestPalindrome = (s) => {
  console.log(0 > 0);
};

// longestPalindrome("a");
// longestPalindrome("aa");
// longestPalindrome("abc");
// longestPalindrome("abcba");
// longestPalindrome("ccc");
// longestPalindrome("babadb");
// longestPalindrome("bacabab");
// longestPalindrome("abbcccbbbcaaccbababcbcabca");
longestPalindrome("aacabdkacaa");

// const longestPalindrome = (s) => {
//   let max = "";
//   for (let i = 0; i < s.length; i++) {
//     console.log(s);
//     for (let j of [0, 1]) {
//       let left = i;
//       let right = i + j;
//       console.log(
//         "after",
//         "i",
//         i,
//         "| s[i]",
//         s[i],
//         "| j",
//         j,
//         "| left",
//         left,
//         "| right",
//         right,
//         right - left - 1 > max.length,
//         "| max",
//         max
//       );
//       while (left >= 0 && s[left] === s[right]) {
//         left--;
//         right++;
//         console.log(
//           true,
//           "i",
//           i,
//           "| s[i]",
//           s[i],
//           "| j",
//           j,
//           "| left",
//           left,
//           "| right",
//           right,
//           right - left - 1 > max.length,
//           "| max",
//           max
//         );
//       }

//       if (right - left - 1 > max.length) {
//         max = s.substring(left + 1, right);
//       }
//     }
//     console.log(`-----------`);
//   }
// };

// const longestPalindrome = (s) => {
//   let maps = {};
//   let uniqueChar = Array.from(new Set(s));
//   let maxIndexRange = [];
//   let maxLength = 0;
//   if (s.length === 1) {
//     return s;
//   }
//   if (s.length === uniqueChar.length) {
//     return s[0];
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in maps) {
//       maps[s[i]].push(i);
//     } else {
//       maps[s[i]] = [i];
//     }
//   }
//   for (let j = 0; j < uniqueChar.length; j++) {
//     let minIndex = Math.min(...maps[uniqueChar[j]]);
//     let maxIndex = Math.max(...maps[uniqueChar[j]]);
//     let indexRange = maxIndex - minIndex;
//     if (indexRange > maxLength) {
//       maxLength = indexRange;
//       maxIndexRange = [minIndex, maxIndex];
//     }
//   }
//   //   console.log(maxIndexRange);
//   console.log(s.slice(maxIndexRange[0], maxIndexRange[1] + 1));
//   return s.slice(maxIndexRange[0], maxIndexRange[1] + 1);
// };

// const longestPalindrome = (s) => {
//   let maxPldStr = "";
//   let currentPldStr = "";
//   let specialPldStr = "";
//   let uniqueChar = Array.from(new Set(s));
//   // 假設s只有一個字母或是每個字母都沒重複，就返回原s值即可
//   if (uniqueChar.length === 1 || s === s.split("").reverse().join("")) {
//     console.log(s, s);
//     return s;
//   }
//   for (let i = 0; i < s.length; i++) {
//     const index = currentPldStr.lastIndexOf(s[i]);
//     if (index > -1) {
//       currentPldStr = currentPldStr.substring(index);
//       if (specialPldStr.length === 0) {
//         specialPldStr = currentPldStr;
//       }
//     }

//     specialPldStr += s[i];
//     currentPldStr += s[i];

//     const isPalindromeForCurrent =
//       currentPldStr === currentPldStr.split("").reverse().join("")
//         ? true
//         : false;
//     const isPalindromeForSpecial =
//       specialPldStr === specialPldStr.split("").reverse().join("")
//         ? true
//         : false;
//     if (isPalindromeForCurrent && currentPldStr.length > maxPldStr.length) {
//       maxPldStr = currentPldStr;
//     }
//     if (isPalindromeForSpecial && specialPldStr.length > maxPldStr.length) {
//       maxPldStr = specialPldStr;
//     }
//   }
//   console.log(s, maxPldStr);
//   return maxPldStr;
// };
