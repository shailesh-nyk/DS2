var convert = function(s, numRows) {
    if(s.length <= 1 || numRows == 1) return s;
    let arr = s.split('');
    let move = 2*numRows - 2;
    let ans = [];
    for(let i = 0 ; i < numRows ; i ++) {
        let temp = i;
        ans.push(arr[i]);
        while(temp+move < arr.length) {
            temp+=move;
            if(i > 0 && i < numRows - 1) ans.push(arr[temp - 2*i]);
            ans.push(arr[temp]);
        }
    }
    return ans.join('');
};

console.log(convert('AB', 1));