// 654. Maximum Binary Tree
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructMaximumBinaryTree = function(nums, start = 0 , end = nums.length - 1) {
    if(start > end) {
        return null;
    }
    if(start == end) {
       return new TreeNode(nums[start]);
    }
    let max = 0;
    let maxIndex = 0;
    for(let i = start ; i <= end; i++) {
        if(nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    let root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums, start , maxIndex - 1);
    root.right = constructMaximumBinaryTree(nums , maxIndex + 1 , end);
    return root;
};
var printPreOrder = function(node) {
    if(node != null) {
        answer.push(node.val);
        printPreOrder(node.left);
        printPreOrder(node.right);
    }
}

var answer = [];
printPreOrder(constructMaximumBinaryTree([3,2,1,6,0,5]));
console.log(answer);