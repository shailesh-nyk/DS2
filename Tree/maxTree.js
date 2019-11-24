/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var constructTree = require('../Tree/sortedArrToTree');

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
var answer = [];
var bstToGst = function(root) {
     console.log("Input tree is: ")
     printPreOrder(root);
     console.log(answer);
    
     traverse(root,0);
    
     answer = [];
     console.log("Output tree is: ")
     printPreOrder(root);
     console.log(answer);
     return root;
};

var traverse = function(root, max) {
    if(root == null) {
        return max;
    } else {
        let greater = traverse(root.right, max);
        root.val = root.val + greater;
        return Math.max(traverse(root.left, root.val), greater);
    }
}

var printPreOrder = function(node) {
    if(node != null) {
        answer.push(node.val);
        printPreOrder(node.left);
        printPreOrder(node.right);
    }
}

let root = constructTree([0,1,2,3,4,5,6,7,8]);
bstToGst(root);