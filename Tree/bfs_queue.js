var Queue = require('../queue');
var constructTree = require('../Tree/sortedArrToTree');

let root = constructTree([-20,-10,-3,0,5,9,12,15]);

function BFS(root) {
    console.log('BFS traversal is =============');

    let queue = new Queue();
    queue.enqueue(root);
    while(!queue.isEmpty()) {
        let x = queue.front();
        if(x.left != null) queue.enqueue(x.left);     //traverse left-right
        if(x.right != null) queue.enqueue(x.right);   
        console.log(x.val); 
        queue.dequeue(); 
    }
}

BFS(root);