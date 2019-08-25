// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]


function reverse(Arr) {
    let start = 0; let end = Arr.length - 1;
    while(start < end) {
        let temp = Arr[start];
        Arr[start] = Arr[end];
        Arr[end] = temp;
        start++;
        end--;
    }
    return Arr;
}   

function invert(Arr) {
    for(let j = 0 ; j < Arr.length ; j++) {
        Arr[j] = !Arr[j];
    }
    return Arr;
}
var flipAndInvertImage = function(A) {
     for(let i = 0 ; i < A.length ; i++) {
         A[i] = reverse(A[i]);
     }
     for(let i = 0 ; i < A.length ; i++) {
         A[i] = invert(A[i]);
     }
     return A;
};

console.log( flipAndInvertImage( [[1,1,0],[1,0,1],[0,0,0]]));
