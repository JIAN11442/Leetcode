const myAtoi = (s) => {
  let result = 0;
  let MIN_32BIT_INTEGER = Math.pow(-2, 31);
  let MAX_32BIT_INTEGER = Math.pow(2, 31) - 1;
  let isNum = s.trimLeft().match(/^[-\+]?\d+/);

  result =
    isNum !== null
      ? isNum[0] > MAX_32BIT_INTEGER
        ? MAX_32BIT_INTEGER
        : isNum[0] < MIN_32BIT_INTEGER
        ? MIN_32BIT_INTEGER
        : parseInt(isNum[0])
      : 0;

  console.log(s.split(" "));
  console.log(s.trimLeft().split(" ")[0], "->", result, "\n");
  return result;
};

myAtoi(" .1");
myAtoi(" +0 123");
myAtoi("  -4193 with words ");
myAtoi("  -41939874654 with words ");
myAtoi("  41939874654 with words ");
myAtoi(" as  41939874654 with words ");
