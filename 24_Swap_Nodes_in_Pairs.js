class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const swapPairs = (head) => {
  console.log(head);
};

swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
// swapPairs(new ListNode(null));
// swapPairs(new ListNode(1));
