function ListNode(val) {
     this.val = val;
     this.next = null;
}
var splitList = function(head) {
    let countList = head;
    let size = 0;
    while(countList) {
        size ++ ;
        countList = countList.next;
    }
    let mid = Math.floor(size/2);
    let leftList = head; 
    let leftPointer = head;
    let rightList = null; 
    let count = 1;
    while(count < mid) {
        count++;
        leftPointer = leftPointer.next;
    }
    rightList = leftPointer.next;
    leftPointer.next = null;
    return {
        left: leftList,
        right: rightList
    }
}

var sortList = function(head) {
    if(head.next == null) return head;
    let split = splitList(head);
    return merge(sortList(split.left), sortList(split.right));
};

var merge = function(leftList, rightList) {
     let result = null;
     let resultPointer = null;
     let leftPointer = leftList;
     let rightPointer = rightList;
     while(leftPointer && rightPointer) {
         let temp;
         if(leftPointer.val < rightPointer.val) {
             temp = leftPointer.val;
             leftPointer = leftPointer.next;
         } else {
             temp = rightPointer.val;
             rightPointer = rightPointer.next;
         }
         if(result == null) {
             result = new ListNode(temp);
             resultPointer = result;
         } else {
             resultPointer.next = new ListNode(temp);
             resultPointer = resultPointer.next;
         }
     }
    resultPointer.next = leftPointer;
    while(resultPointer.next) {
         resultPointer = resultPointer.next;
    }
    resultPointer.next = rightPointer;
    return result;
}

var printList = function(node) {
    let str = "";
    while(node) {
        str += node.val + " -> ";
        node = node.next;
    }
    console.log(str);
}

var input = [4,2,1,3];
var head = new ListNode(input[0]);
var copy = head;
for(let i = 1 ; i < input.length; i++) {
    copy.next = new ListNode(input[i]);
    copy = copy.next;
}
copy.next = null;
console.log("Input list is");
printList(head);
console.log("Sorted list is");
printList(sortList(head));

