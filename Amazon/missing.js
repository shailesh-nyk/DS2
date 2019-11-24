

var missing = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while((end - start) > 1) {
        mid = Math.floor((start+end)/2);
        if(arr[start] - start != arr[mid] - mid) {
            end = mid;
        } else if(arr[end] - end != arr[mid] - mid) {
            start = mid;
        }
    }
    mid = Math.floor((start+end)/2);
    return arr[mid] + 1;
}

console.log(missing([1, 2, 3, 4, 6, 7, 8]));