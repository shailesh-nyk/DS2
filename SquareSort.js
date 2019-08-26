// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(A) {
    for(let i = 0 ; i < A.length ; i++) {
        A[i] = A[i] * A[i];
    }
    return sort(A);
};


function sort(arr) {
    return quicksort(arr, 0 , arr.length - 1);  
}

function quicksort(arr, start, end) {
    if(start >= end) {
        return;
    }
    let pivot = arr[parseInt((start + end)/2)];
    let index = partition(arr, start, end, pivot);
    quicksort(arr, start, index - 1);
    quicksort(arr, index, end);
    return arr;
}
function partition(arr, start, end, pivot) {
    while(start <= end) {
        while(arr[start] < pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }
        if(start <= end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return start;
}


//execution
let inputArr = [-7,-3,2,3,11];
console.log('Input array is:    ' + inputArr);
console.log('Result array is:   ' + sortedSquares(inputArr));
