function Stack(){
    this.count = 0;
    this.storage = {};
}
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count ++ ;
}

Stack.prototype.pop = function() {
    if(this.count == 0) {
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
Stack.prototype.peek = function() {
    return this.storage[this.count - 1];
}
Stack.prototype.size = function() {
    return this.count;
}
Stack.prototype.print = function() {
    console.log("======STACK=====")
    console.log(this.storage);
}

module.exports = Stack;