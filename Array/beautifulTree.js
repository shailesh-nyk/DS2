

function beautifulTree(trees) {
    let i = 0;
    let j = trees.length - 1;
    let result = 0;
    while(i < j - 1) {
        if(trees[i] > trees[i+1] && trees[i+1] > trees[i-1]) {
            result ++;
        }
        i++;
        if(trees[j] > trees[j-1] && trees[j-1] > trees[j+1]) {
            result++;
        }
        j--;
    }
    return result;
}

console.log(beautifulTree([3,17,2,12,19,20,21]));