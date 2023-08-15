// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// ---------------------------------------------------------------------

// const lengthOfLongestSubstring = (s) => {
//   let map = [];
//   let list = [];
//   let value = "";
//   let maxStringLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.includes(s[i])) {
//       value = map.join("");
//       if (value.length > maxStringLength) {
//         maxStringLength = value.length;
//       }

//       list.push(value);

//       map = [s[i]];
//     } else {
//       map.push(s[i]);
//       if (i === s.length - 1) {
//         value = map.join("");
//         if (value.length > maxStringLength) {
//           maxStringLength = value.length;
//         }
//         list.push(value);
//       }
//     }
//   }
//   console.log(list);
//   return maxStringLength;
// };

// ---------------------------------------------------------------------

// const lengthOfLongestSubstring = (s) => {
//   let list = [];
//   let maxString = "";
//   for (let i = 0; i < s.length; i++) {
//     let map = [];
//     let value = "";
//     for (let j = i; j < s.length; j++) {
//       if (map.includes(s[j])) {
//         break;
//       } else {
//         map.push(s[j]);
//         value = map.join("");
//       }
//     }
//     if (value.length > maxString.length) {
//       maxString = value;
//     }
//     list.push(value);
//   }
//   console.log(list);
//   console.log(maxString);
//   return maxString.length;
// };

// ---------------------------------------------------------------------

const lengthOfLongestSubstring = (s) => {
  let index = 0;
  let currentStr = "";
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    index = currentStr.indexOf(s[i]);
    // 代表maxStr(沒有重複時會一直累計)中有s[i],
    // 這樣的話我們就取maxStr中s[i]位置之後的值，
    // 反正同一個subString不能有重複值
    if (index > -1) {
      currentStr = currentStr.substring(index + 1);
    }
    currentStr += s[i];
    if (currentStr.length > maxStr.length) {
      maxStr = currentStr;
    }
  }
  console.log(maxStr);
  return maxStr.length;
};

lengthOfLongestSubstring("dvdf");
