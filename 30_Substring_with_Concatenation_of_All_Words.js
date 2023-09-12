const findSubstring = (s, words) => {
  let l = words[0].length;
  let count = {};
  let res = [];

  for (let w of words) {
    count[w] ? (count[w] += 1) : (count[w] = 1);
  }

  const clg = (status, i, j, str, stack, match, res) => {
    if (status === "after") {
      console.log(i, j, str, stack, match, res, "\n", "----------------------");
    } else {
      console.log(i, j, str, stack, match, res);
    }
  };

  const recurs = (i, j, l, count) => {
    let stack = {};
    let match = false;

    while (!match) {
      clg("before", i, j, s.substring(0, j), stack, match, res);
      let str = s.substring(j, j + l);

      if (count[str]) {
        if (stack[str]) {
          if (stack[str] < count[str]) {
            stack[str] += 1;
            j += l;
          } else {
            i += l;
            j = i;
            break;
          }
        } else {
          stack[str] = 1;
          j += l;
        }
      } else {
        i += l;
        j = i;
        break;
      }

      match = Object.keys(count).every((item) => count[item] === stack[item]);

      if (match) {
        res.push(i);
        // clg("after", i, j, str, stack, match, res);
        i += l;
        j = i;
        break;
      } else {
        // clg("after", i, j, str, stack, match, res);
      }
    }
    if (j < s.length) {
      recurs(i, j, l, count);
    }
  };

  let i = 0;
  let j = i;
  recurs(i, j, l, count);

  //   console.log(res);
};

// findSubstring("foobarfoobar", ["foo", "bar"]); //[0, 3, 6]
// findSubstring("barfoothefoobarman", ["foo", "bar"]); //[0, 9]
// findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]); //[6, 9, 12]
findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]); //[8]
// findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]); //[]
// findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
//   "fooo",
//   "barr",
//   "wing",
//   "ding",
//   "wing",
// ]); //[13]
