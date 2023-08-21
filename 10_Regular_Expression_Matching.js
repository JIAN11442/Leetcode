// const print = (s, p, num, result) => {
//   console.log(
//     " s:",
//     s,
//     "\n",
//     "p:",
//     p,
//     "\n",
//     "operation:",
//     num,
//     "\n",
//     "result:",
//     result,
//     "\n"
//   );
// };

const isMatch = (s, p) => {
  if (!p) {
    return !s;
  }

  let hasFirstCharMatch = (Boolean(s) && p[0] === ".") || p[0] === s[0];

  if (p[1] === "*") {
    return (
      isMatch(s, p.slice(1)) || (hasFirstCharMatch && isMatch(s.slice(1), p))
    );
  }

  return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
};

isMatch("", "");
isMatch("aa", "");
isMatch("", ".a");
isMatch("aa", "a*");
isMatch("aa", ".*");
isMatch("aa", "b*.*");
