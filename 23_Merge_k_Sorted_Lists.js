class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeKLists = (lists) => {
  let res = null;
  let reslist = [];
  const twoMerge = (l1, l2) => {
    let list = new ListNode(0);
    let head = list;
    let result = [];

    if (!l1) return l2;
    if (!l2) return l1;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        head.next = l1;
        l1 = l1.next;
      } else {
        head.next = l2;
        l2 = l2.next;
      }
      head = head.next;
    }
    head.next = l1 || l2;

    // console.log(list.next);
    return list.next;
  };

  for (let i = 0; i < lists.length; i++) {
    res = twoMerge(res, lists[i]);
  }
  while (res) {
    reslist.push(res.val);
    res = res.next;
  }
  console.log(reslist);
  // console.log(res);
};

mergeKLists([
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
]);

mergeKLists(new ListNode(null));
mergeKLists(new ListNode(new ListNode(null)));
