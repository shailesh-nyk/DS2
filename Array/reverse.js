//REVERSING
var rotate = function(nums, k) {
    nums = nums.reverse();
    nums = reverse(nums, 0, k);
    nums = reverse(nums, k , nums.length);
    console.log(nums);
};
var reverse = function (nums, start, end) {
    let startArr = nums.slice(0,start);
    let reversed = nums.slice(start,end).reverse();
    let endArr = nums.slice(end, nums.length);
    startArr = [...startArr, ...reversed, ...endArr];
    return startArr;
} 
rotate([1,2,3,4,5,6,7],3);