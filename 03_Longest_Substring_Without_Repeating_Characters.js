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

const lengthOfLongestSubstring = (s) => {
  let map = [];
  let list = [];
  for (let i = 0; i < s.length; i++) {
    if (map.includes(s[i])) {
      const value = map.join("");
      list.push(value);
      map = [];
      map.push(s[i]);
    } else {
      map.push(s[i]);
    }
  }
  console.log(list);
};

lengthOfLongestSubstring("pwwkew");
