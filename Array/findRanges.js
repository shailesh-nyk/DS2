function composeRanges(nums) {
    let result = [];
    let rangeStr = "" + nums[0];
    for(let i = 1 ; i < nums.length; i++) {
            if(nums[i] - nums[i-1] == 1) continue;
            rangeStr += "->" + nums[i-1];
            result.push(rangeStr);
            rangeStr = "" + nums[i];
        }
    }
    return result;
}

