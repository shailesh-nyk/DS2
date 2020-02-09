function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function(value) {
    this.items.push(value);
}
Queue.prototype.dequeue = function() {
    this.items.shift();
}
Queue.prototype.front = function() {
    return this.items[0];
}
Queue.prototype.print = function() {
    let str = "";
    for(let i = this.items.length - 1 ; i>=0 ; i--) {
        str += this.items[i].val + "\t";
    }
    str+= "  ==>";
    console.log(str);
}
Queue.prototype.isEmpty = function() {
     return this.items.length == 0 ;
}
Queue.prototype.size = function() {
    return this.items.length
}

module.exports = Queue;