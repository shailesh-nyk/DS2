// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

var reverseOnlyLetters = function(S) {
    let arr = S.split('');
    let i = 0 ; let j = arr.length - 1 ;
    while(i < j) {
        let isIAlpha = /^[A-Za-z]+$/.test(arr[i]);
        let isJAlpha = /^[A-Za-z]+$/.test(arr[j]);
        if(isIAlpha & isJAlpha) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
            j--;
        } 
        if(!isIAlpha) i++;
        if(!isJAlpha) j--;
    }
    return arr.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))