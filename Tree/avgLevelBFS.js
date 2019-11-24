// 637. Average of Levels in Binary Tree
// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while(queue.length > 0) {
        let qlength = queue.length;
        let sum = 0;
        for(let i = 0 ; i < qlength ; i++) {
            sum +=  queue[0].val;
            if(queue[0].left != null) queue.push(queue[0].left);
            if(queue[0].right != null) queue.push(queue[0].right);
            queue.shift();
        }
        result.push(sum/qlength);
    }
    return result;
};