// const isPalindrome = (x) => {
//   let reverse = x.toString().split("").reverse().join("");

//   console.log(x, "->", reverse == x);
//   return reverse == x;
// };

const isPalindrome = (x) => {
  let reverse = 0;
  let val = x;

  while (val > 0) {
    let digit = val % 10;
    reverse = reverse * 10 + digit;
    val = ~~(val / 10);
  }
  console.log(x, "->", reverse, reverse == x);
  return reverse == x;
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
