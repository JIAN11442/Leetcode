class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeKLists = (lists) => {
  console.log(lists);
};

mergeKLists([
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
]);

// mergeKLists(new ListNode(null));
// mergeKLists(new ListNode(new ListNode(null)));
