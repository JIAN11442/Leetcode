const longestValidParentheses = (s) => {
  let i = 0;
  let stack = [];
  let res = 0;

  while (i < s.length) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      default: {
        if (s[i] === stack.pop()) {
          res += 2;
        } else {
          res = 0;
        }
      }
    }
    i++;
  }

  console.log(s, res);
  return res;
};

longestValidParentheses("()(()");
longestValidParentheses("(()");
longestValidParentheses("(()()");
longestValidParentheses(")()()(");
