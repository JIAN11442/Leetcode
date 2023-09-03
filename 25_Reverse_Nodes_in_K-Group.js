class ListNode {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}

const reverseKGroup = (head, k) => {
  const recurs = (h) => {
    let curr = h;
    let count = 0;

    while (curr && count < k) {
      curr = curr.next;
      count++;
    }

    if (count == k) {
      curr = recurs(curr);

      while (count > 0) {
        let tmp = h.next;
        h.next = curr;
        curr = h;
        h = tmp;

        count--;
      }
      h = curr;
    }
    return h;
  };
  return recurs(head);
};

reverseKGroup(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  ),
  3
);
