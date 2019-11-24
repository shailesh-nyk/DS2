var Stack = require('../stack');
var constructTree = require('../Tree/sortedArrToTree');

let root = constructTree([-20,-10,-3,0,5,9,12,15]);

function DFS(root) {
    console.log('DFS traversal is =============');
    let stk = new Stack();
    stk.push(root);
    while(stk.size() != 0) {
        let x = stk.pop();
        if(x.left != null) stk.push(x.left);     //traverse right first. so push left to bottom of stack
        if(x.right != null) stk.push(x.right);   //traverse right first. so push right to top of
        console.log(x.val); 
    }
}

DFS(root);