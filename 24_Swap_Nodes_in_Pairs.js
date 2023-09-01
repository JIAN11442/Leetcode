class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const swapPairs = (head) => {
  let dummy = new ListNode(-1, head);
  let curr = dummy;

  while (curr.next !== null && curr.next.next !== null) {
    let p1 = curr.next;
    let p2 = curr.next.next.next;

    curr.next = curr.next.next;
    curr.next.next = p1;
    p1.next = p2;

    curr = curr.next.next;
  }

  console.log(dummy.next);
  return dummy.next;
};

swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
// swapPairs(new ListNode(null));
// swapPairs(new ListNode(1));
