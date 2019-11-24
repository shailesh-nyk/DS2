var letterCasePermutation = function(S) {
    let set = new Set();
    set.add(S);
    for(let i = 0 ; i < S.length ; i++) {
        for(let j = 0 ; j < S.length; i++) {
            if((S.charAt(j) != S.charAt(i)) && (S.charAt(j).toLowerCase() != S.charAt(j).toUpperCase())) {
                let temp = S;
                temp[j] = temp.charAt(j).toLowerCase();
                if(!set.has(temp)) set.add(temp);
                temp = S;
                temp[j] = temp.charAt(j).toUpperCase();
                if(!set.has(temp)) set.add(temp);
            }  
        }
    }
    console.log(set);
};

letterCasePermutation('a1b2');