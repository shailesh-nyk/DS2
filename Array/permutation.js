/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(useSet, currSet = [] , result = []) {
    useSet = useSet.split('');
    if(useSet.length == 0) {
        result.push(currSet.join(''));
    }
    for(let i = 0 ; i < useSet.length ; i++) {
        const newUseSet = useSet.filter((x,index) => index !== i);
        currSet.push(useSet[i]);
        permute(newUseSet.join(''), currSet, result);
        currSet.pop();
    }
    return result;
};

console.log(permute("abc"));