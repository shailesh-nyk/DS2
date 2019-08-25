// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let hashmap = {};
    for(let i = 0 ; i < nums.length ; i++) {
        hashmap[nums[i]] = i;
    }
    for(let j = 0 ; j < nums.length - 1 ; j++) {
        if(hashmap.hasOwnProperty(target - nums[j])) {
            if(hashmap[target - nums[j]] != j) {
                return [j, hashmap[target - nums[j]]]
            }
        }
    }
};

console.log( twoSum([2, 7, 11, 15], 9) );