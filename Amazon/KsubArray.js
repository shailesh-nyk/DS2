// 992. Subarrays with K Different Integers


var subarraysWithKDistinct = function(A, K) {
    let result = [];
    for(let i = 0 ; i <= A.length - K ; i++) {
        let end = i + K - 1;
        while(end <= A.length) {
            if(validSubArr(A.slice(i,end),K)) {
                result.push(A.slice(i,end));
            }
            end++;
        }
    }
    console.log(result);
};

var validSubArr = function(arr, K) {
    let map = {};
    for(let i = 0 ; i < arr.length ; i++) {
        map[arr[i]] = "";
    }
    return Object.keys(map).length == K;
}

subarraysWithKDistinct([1,2,1,2,3],2);