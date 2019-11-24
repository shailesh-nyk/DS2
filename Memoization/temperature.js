
var dailyTemperatures = function(T) {
    debugger;
    let result = new Array(T.length).fill(0);
    let stack = [T.length - 1];
    for(let i = T.length - 2; i >=0 ; i--) {
        if(T[i] < T[stack[stack.length - 1]]) {
            result[i] = 1;
            stack.push(i);
            continue;
        } else {
            let count = 0;
            while(stack.length != 0 && T[i] > T[stack[stack.length - 1]]) {
                count += result[stack.pop()];
            }
            result[i] = count;
            stack.push(i);
        }
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));