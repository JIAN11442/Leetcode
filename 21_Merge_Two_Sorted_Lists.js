class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  let list = new ListNode(0);
  let head = list;

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

  console.log(list.next);
  return list.next;
};

mergeTwoLists(
  new ListNode(1, new ListNode(2, new ListNode(4))),
  new ListNode(1, new ListNode(3, new ListNode(4)))
);
mergeTwoLists(new ListNode(null), new ListNode(null));
mergeTwoLists(new ListNode(null), new ListNode(0));
