const isValid = (s) => {
  let stack = [];

  if (s.length % 2 !== 0) {
    console.log(false);
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;

      default:
        // 如果s[i]不等於以上任一case，那一定是關閉括號
        // 這時候我想看看當前關閉括號是不是等於stack的最後一個str，是的話就是valid parentheses，不然就是invalid parentheses
        // 因為stack是根據開括號類型堆疊對應的關閉括號形成的，所以stack的最後一個關閉掛號一定是對應前一個開括號的
        // 要注意是stack.pop(),而不是stack.pop後的stack，
        // 假設stack=['}',']'],那麼stack.pop()會去除stack的最後一個元素後返回最後一個元素，所以stack.pop()的結果是']'(返回最後元素)，
        // 而pop()之後的stack就會從原本的['}',']']變為['}']
        if (s[i] !== stack.pop()) {
          console.log(false);
          return false;
        }
    }
  }

  // 如果所有關閉括號都等於stack.pop()，那麼最後的stack一定是空的，因為符合一個就刪去一個
  // 如果stack到最後還有剩下的關閉括號，代表原本的s一定是少了這剩下的括號，結果自然也就是invalid parentheses
  // 如果還是不懂，可以假設 s = ['((']，因為s[i]都是case中能找到的，不會經過default，結果就是stack還剩下[')',')']
  console.log(stack.length === 0);
  return stack.length === 0;
};

// isValid("()");
// isValid("(){");
// isValid("(]");
isValid("{[]}");
// isValid("()[]{}");
