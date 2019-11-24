
  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 

  @param {ListNode} head
  @return {ListNode}
 
var start;
var reverseList = function(head) {
     if(head && head.next) {
        reverseListRecursive(head);
        return start;
     } else {
        return head;
     }
   
};

var reverseListRecursive = (curr) = {
    if(curr == null) {
        return;
    }
    if(curr.next == null) {
        start = curr;
        return;
    }
    reverseListRecursive(curr.next);
    curr.next.next = curr;
    curr.next = null;
}
