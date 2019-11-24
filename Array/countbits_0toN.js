// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0,1,1]
// Example 2:

// Input: 5
// Output: [0,1,1,2,1,2]
// Follow up:

// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n)

var countBits = function(num) {
    let m = 0;
    if(num == 0) return [0];
    if(num == 1) return [0,1];
    let ans = [0,1];
    for(let i = 2 ; i <= num ; i++) {
        let curr = i % Math.pow(2,m);
        ans[i] = ans[curr] + 1;
        if(curr == 0) m++;
    }
    return ans;
};

console.log(countBits(23));