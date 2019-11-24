// 238. Product of Array Except Self

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

//BRUTE FORCE :
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    for(let i = 0 ; i < nums.length ; i++) {
        result[i] = product(nums,i);
    }
    return result;
};

var product = (nums, i) => {
    let prod = 1;
    for(let j = 0 ; j < nums.length ; j++) {
        if(j != i ) {
            prod *= nums[j];
        }
    }
    return prod;
}

//OPTIMAL SOLUTION:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Using left and right product strategy


var productExceptSelf = function(nums) {
    let LeftProd = [1];
    let RightProd = [] ;
    RightProd[nums.length - 1] = 1;
    let result = [];
    for(let i = 1; i < nums.length ; i++) {
        LeftProd[i] = LeftProd[i-1] * nums[i-1];
    }
    for(let i = nums.length - 2 ; i >= 0 ; i-- ) {
        RightProd[i] = RightProd[i+1] * nums[i+1]
    }
    for(let i = 0; i < nums.length ; i++) {
        result[i] = LeftProd[i] * RightProd[i]
    }
    return result;
};
