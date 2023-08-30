const mergeAlternately = (w1, w2) => {
  let maxLength = Math.max(w1.length, w2.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += (w1[i] || "") + (w2[i] || "");
  }

  console.log(w1, w2, result);
  return result;
};

mergeAlternately("abc", "pqr");
mergeAlternately("ab", "pqrs");
mergeAlternately("abcd", "pq");
