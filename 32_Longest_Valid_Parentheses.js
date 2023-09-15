const longestValidParentheses = (s) => {
  for (let i = 0; i < s.length; i++) {
    console.log(i, s[i]);
  }
};

// longestValidParentheses("(()");
// longestValidParentheses("(()()");
longestValidParentheses(")()()(");
