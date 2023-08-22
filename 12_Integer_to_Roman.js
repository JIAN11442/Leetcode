const intToRoman = (num) => {
  let data = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  Object.entries(data).map(([letter, n]) => {
    if (num / n >= 1) {
      result += letter.repeat(Math.floor(num / n));
      num %= n;
    }
  });
  console.log(result);
  return result;
};

intToRoman(3);
intToRoman(58);
intToRoman(1998);
