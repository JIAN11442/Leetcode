// const findSubstring = (s, words) => {
//   let l = words[0].length;
//   let count = {};
//   let res = [];

//   for (let w of words) {
//     count[w] ? (count[w] += 1) : (count[w] = 1);
//   }

//   const recurs = (i, j, l, count) => {
//     let stack = {};
//     let match = false;

//     while (!match) {
//       let str = s.substring(j, j + l);

//       if (count[str]) {
//         if (stack[str]) {
//           if (stack[str] < count[str]) {
//             stack[str] += 1;
//             j += l;
//           } else {
//             i += l;
//             j = i;
//             break;
//           }
//         } else {
//           stack[str] = 1;
//           j += l;
//         }
//       } else {
//         i += l;
//         j = i;
//         break;
//       }

//       match = Object.keys(count).every((item) => count[item] === stack[item]);

//       if (match) {
//         res.push(i);
//         i += l;
//         j = i;
//         break;
//       } else {
//       }
//     }
//     if (j < s.length) {
//       recurs(i, j, l, count);
//     }
//   };

//   for (let i = 0; i < l; i++) {
//     let j = i;
//     recurs(i, j, l, count);
//   }

//   console.log(res);
//   return res;
// };

const findSubstring = (s, words) => {
  let ewl = words[0].length;
  let awl = words.length * ewl;
  let count = {};
  let res = [];

  for (let w of words) {
    count[w] = ++count[w] || 1;
  }

  const isMatch = (str, ewl, count) => {
    let maps = {};
    for (let i = 0; i < str.length - ewl + 1; i += ewl) {
      let sub = str.substring(i, i + ewl);
      maps[sub] = ++maps[sub] || 1;
    }

    let match = Object.keys(count).every((item) => count[item] === maps[item]);
    return match;
  };

  for (let i = 0; i < s.length - awl + 1; i++) {
    let str = s.substring(i, i + awl);
    if (words.indexOf(str.substring(0, ewl)) >= 0) {
      if (isMatch(str, ewl, count)) res.push(i);
    }

    // console.log(str, isMatch(str, ewl, count), str.substring(0, ewl));
  }

  console.log(res);
  return res;
};

// findSubstring("foobarfoobar", ["foo", "bar"]); //[0, 3, 6]
// findSubstring("barfoothefoobarman", ["foo", "bar"]); //[0, 9]
// findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]); //[6, 9, 12]
// findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]); //[8]
// findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]); //[]
findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
  "fooo",
  "barr",
  "wing",
  "ding",
  "wing",
]); //[13]
