// O:時間複雜度
// S:空間複雜度

// Solution 1 - 遞歸
// O(N-M); S(N) - N為haystack長度；M為needle長度
// const strStr = (haystack, needle) => {
//   let i = 0;
//   const recurs = (h, n) => {
//     if (h.length >= n.length && h.substring(0, n.length) !== n) {
//       h = h.substring(1);
//       i++;
//       return recurs(h, n);
//     } else if (h.substring(0, n.length) === n) {
//       console.log(i);
//       return i;
//     } else {
//       console.log(-1);
//       return -1;
//     }
//   };
//   return recurs(haystack, needle);
// };

// Solution 2 -迭代
const strStr = (haystack, needle) => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
};

strStr("sadbutsad", "sad");
strStr("leetcode", "leeto");
strStr("hello", "ll");
