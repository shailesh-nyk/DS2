
var input = [5, 1, 7, 3, 2, 8, 6, 4];

var mergeSort = function(array) {
    let size = array.length;
    if(size == 1) return array;
    
    let mid = Math.floor(size/2);
    let leftArr = array.slice(0,mid);
    let rightArr = array.slice(mid);
    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr,rightArr, array);
    console.log(array);
    return array;
} 
var merge = function(leftArr, rightArr, array) {
    let index = 0;
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            array[index++] = leftArr.shift();
        } else {
            array[index++] = rightArr.shift();
        }
    }
    while(leftArr.length) {
        array[index++] = leftArr.shift();
    }
    
    while(rightArr.length) {
        array[index++] = rightArr.shift();
    }
}

mergeSort(input);
