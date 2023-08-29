class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {};

mergeTwoLists(
  new ListNode(1, new ListNode(2, new ListNode(4))),
  new ListNode(1, new ListNode(3, new ListNode(4)))
);
mergeTwoLists(new ListNode(null), new ListNode(null));
mergeTwoLists(new ListNode(null), new ListNode(0));
