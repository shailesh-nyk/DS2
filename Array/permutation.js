/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var result = [];
var permute = function(nums) {
    permuteRecursive(nums, []);
};
var permuteRecursive = function(useSet, currSet) {
    if(useSet.length == 0) {
        console.log(currSet);
        result.push(currSet);
        return;
    } else {
        for(let i = 0 ; i < useSet.length ; i++) {
            currSet.push(useSet[i]);
            useSet.splice(i,1);
            permuteRecursive(useSet, currSet);
        }
        return;
    }
}

permute([1,2,3]);