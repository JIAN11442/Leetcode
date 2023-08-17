const myAtoi = (s) => {
  const isNum = s.match(/-?\d+/);
  if (isNum === null) {
    console.log(s, "->", isNum);
    return null;
  }
  console.log(s, "->", isNum[0]);
  return isNum[0];
};

myAtoi("  -4193with words");
