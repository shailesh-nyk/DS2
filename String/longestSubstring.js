// var lengthOfLongestSubstring = function(str) {
//     let s = str;
//     let longest = s.charAt(0);
//     let temp = '';
//     let i = 1;
//     while(i < s.length) {
//         if(longest.includes(s.charAt(i))) {
//             s = s.slice(s.indexOf(s.charAt(i)) + 1,s.length);
//             i = 0;
//             if(longest.length > temp.length) temp = longest ; 
//             longest = s.charAt(i);
//         } else {
//             longest += s.charAt(i);
//         }
//         i++;
//     }
//     return longest.length > temp.length ? longest.length : temp.length ; 
// };
var lengthOfLongestSubstring = function(str) {
    let s = str;
    let longest = '';
    let temp = '';
    let i = 0;
    let n = str.length;
    while(i < n) {
        if(longest.includes(str.charAt(i))) {
            s = s.slice(s.indexOf(s.charAt(i)) + 1,s.length);
            if(longest.length > temp.length) temp = longest ; 
            longest = s.slice(0, i - s.indexOf(s.charAt(i)))
        } else {
            longest += str.charAt(i);
        }
        i++;
    }
    return longest.length > temp.length ? longest.length : temp.length ; 
};

console.log(lengthOfLongestSubstring("abcabcbb"))