function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var printPreOrder = function(node) {
    if(node != null) {
        console.log(node);
        printPreOrder(node.left);
        printPreOrder(node.right);
    }
}

var bstFromPreorder = function(preorder) {
    return constructTree(preorder, 0, preorder.length - 1)
};

var constructTree = function(preorder, start, end) {
  if(start > end) {
      return null;
  }
  let root = new TreeNode(preorder[start]);
  if(start == end) {
      return root;
  }
  let rightIndex;
  for(let i = start ; i <= end; i++) {
      if(preorder[i] > preorder[start]) {
          rightIndex = i;
          break;
      }
  }
  root.left = constructTree(preorder, start + 1, rightIndex ? rightIndex- 1 : end);
  root.right = constructTree(preorder, rightIndex ? rightIndex : end + 1, end);
  return root;
}

printPreOrder(bstFromPreorder([4,2]));
