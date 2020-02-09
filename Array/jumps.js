function avoidObstacles(inputArray) {
    let jump = 2;
    inputArray.sort((a,b) => a - b);
    let currObstacle = 0;
    let curr = 0;
    while(curr <= inputArray[inputArray.length - 1] || currObstacle > inputArray.length) {
        if(curr == inputArray[currObstacle]) {
            jump++;
            while(curr % jump == 0) {
                curr++;
            }
        } else {
            curr += jump;
        }
        while(inputArray[currObstacle] <= curr) {
            currObstacle++;
        }
    }
    return jump;
}   

console.log(avoidObstacles([5, 3, 6, 7, 9]));