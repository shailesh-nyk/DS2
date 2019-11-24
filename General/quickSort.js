
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

let inputArr = [5,7,1,8,2];
console.log('Input array is:    ' + inputArr);
console.log('Sorted array is:   ' + sort(inputArr));