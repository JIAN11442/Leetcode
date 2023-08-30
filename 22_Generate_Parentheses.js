const generateParenthesis = (n) => {
  let res = [];

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
    }

    if (l < n) go(l + 1, r, s + "(");
    if (r < l) go(l, r + 1, s + ")");
  };

  go(0, 0, "");

  console.log(res);
  return res;
};

generateParenthesis(3);
generateParenthesis(1);
