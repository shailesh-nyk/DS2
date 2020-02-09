
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


var reverseInParentheses = function(inputString) {
     var stk = new Stack();
     var result = '';
     for(let i = 0 ; i < inputString.length; i++) {
         if(inputString[i] == '(') {
             stk.push(inputString[i]);
             continue;
         }
         if(stk.size() == 0) {
            result += inputString[i]; 
         } else {
             if(inputString[i] == ")") {
                let str = '';
                while(stk.peek() != "(") {
                    str += stk.pop();
                }
                stk.pop();
                if(stk.size() > 0) {
                    for(let j = 0 ; j < str.length; j++) {
                        stk.push(str[j]);
                    }
                } else {
                    result += str;
                }
             } else {
                stk.push(inputString[i]);
             }
         }
     }
     return result;
}

var res = reverseInParentheses("foo(bar(baz))blim");
console.log(res);