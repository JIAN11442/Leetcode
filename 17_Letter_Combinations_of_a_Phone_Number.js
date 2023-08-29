const letterCombinations = (digits) => {
  let result = [];
  let alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (i, digits, slate) => {
    if (i === digits.length) {
      result.push(slate.join(""));
    } else {
      let chars = alpha[digits[i]];
      for (const char of chars) {
        slate.push(char);
        dfs(i + 1, digits, slate);
        console.log("Before pop: ", i, slate);
        slate.pop();
        console.log("After pop: ", i, slate);
      }
    }
  };

  if (digits === "") {
    console.log(result);
    return result;
  }

  dfs(0, digits, []);
  // console.log(result);
  return result;
};

// letterCombinations("");
// letterCombinations("2");
letterCombinations("23");
// letterCombinations("2345");
