var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    for(let i = 1 ; i < nums.length ; i++) {
        if(nums[i] > sum) {
            sum = nums[i];
            max = nums[i];
        } else {
            if(sum + nums[i] > max) {
                sum += nums[i];
                max = sum;
            } else {
                sum = nums[i];
            }
        }
    }
    return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);