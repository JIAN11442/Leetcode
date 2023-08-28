class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeNthFromEnd = (head, n) => {
  let list = head;
  let fast = list;
  let slow = list;

  //   讓fast先跑出n位
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  //   if (!fast) {
  //     console.log(head.next);
  //     return head.next;
  //   }

  //   接著再讓fast和slow同時跑，知道fast到list盡頭
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  //   這時候slow的下一個值就是要去拿掉的，
  //   所以我們讓slow.next = slow.next.next（讓slow的下一個值等於下下個值）
  slow.next = slow.next.next;
  console.log(list);
  return list;
};

const head_1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const head_2 = new ListNode(1);
const head_3 = new ListNode(1, new ListNode(2));

removeNthFromEnd(head_1, 5);
// removeNthFromEnd(head_2, 1);
// removeNthFromEnd(head_3, 1);
