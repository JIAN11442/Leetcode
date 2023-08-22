// const longestCommonPrefix = (strs) => {
//   let i = 0;
//   let prefix = "";

//   if (!strs.length) {
//     console.log("");
//     return "";
//   }

//   while (
//     i < Math.min(...strs.map((str) => str.length)) &&
//     strs.every((str) => str[i] === strs[0][i])
//   ) {
//     prefix += strs[0][i];
//     i++;
//   }
//   console.log(prefix);
//   return prefix;
// };

const longestCommonPrefix = (strs) => {
  if (!strs.length) {
    console.log(strs.length);
    console.log("");
    return "";
  }

  let prefix = strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) {
      i++;
    }
    return prev.slice(0, i);
  });
  console.log(prefix);
  return prefix;
};

longestCommonPrefix([""]);
longestCommonPrefix(["a"]);
longestCommonPrefix(["", ""]);
longestCommonPrefix(["dog", "rececar", "car"]);
longestCommonPrefix(["flower", "flow", "flight"]);
