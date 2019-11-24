
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var root;
var answer = [];

var sortedArrayToBST = function(nums) {
     let root = buildTree(nums, 0, nums.length - 1);
     printPreOrder(root);
     console.log(answer);
     return root;
};

var buildTree = function(nums, start, end) {
     if(start > end) {
         return null;
     }
     let mid = parseInt(Math.ceil((end + start)/2));
     let root = new TreeNode(nums[mid]);
     if(start == end) {
         return root;
     }
     root.left = buildTree(nums, start, mid - 1);
     root.right = buildTree(nums, mid + 1, end);
     return root;
}
var printPreOrder = function(node) {
    if(node != null) {
        answer.push(node.val);
        printPreOrder(node.left);
        printPreOrder(node.right);
    }
}

module.exports = sortedArrayToBST;

//sortedArrayToBST([-20,-10,-3,0,5,9,12,15]);