const romanToInt = (str) => {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    symbols[str[i]] < symbols[str[i + 1]]
      ? (result -= symbols[str[i]])
      : (result += symbols[str[i]]);
  }

  console.log(result);
  return result;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");
romanToInt("MCMXCVIII");

// const romanToInt = (str) => {
//   let data = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };

//   let i = str.length - 1;
//   let result = 0;

//   while (Boolean(str)) {
//     let val = 0;
//     let currenCharNum = data[str[str.length - 1]];
//     let prevCharNum = data[str[str.length - 2]];

//     if (prevCharNum < currenCharNum) {
//       val = currenCharNum - prevCharNum;
//       str = str.slice(0, str.length - 2);
//     } else {
//       val = currenCharNum;
//       str = str.slice(0, str.length - 1);
//     }

//     result += val;
//   }
//   console.log(result);
//   return result;
// };
