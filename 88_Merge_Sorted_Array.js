const merge = (n1, m, n2, n) => {
  let sumIndex = m + n - 1;

  m -= 1;
  n -= 1;

  while (n >= 0) {
    if (m >= 0 && n1[m] > n2[n]) {
      n1[sumIndex] = n1[m];
      m--;
    } else {
      n1[sumIndex] = n2[n];
      n--;
    }
    sumIndex--;
  }
  console.log(n1);
  return n1;
};

merge([1], 1, [], 0);
merge([0], 0, [], 0);
merge([0], 0, [1], 1);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([2, 3, 5], 3, [1, 4, 6, 0, 0], 3);
