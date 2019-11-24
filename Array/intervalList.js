// 986. Interval List Intersections MEDIUM

var intervalIntersection = function(A, B) {
    let a = 0;
    let b = 0;
    let result = [];
    while(a < A.length && b < B.length) {
        if(A[a][0] <= B[b][1] || A[a][1] <= B[b][0]) {
            let res = [...A[a], ...B[b]];
            res.sort((a,b) => { return a > b ? 1 : -1 });
            result.push([res[1], res[2]]);
        }
        if(A[a][1] < B[b][1]) {
            a++;
        } else if(A[a][1] > B[b][1]) {
            b++;
        } else {
            a++;
            b++;
        }
    }
    return result;
};

let A = [[4,11]]
let B = [[1,2],[8,11],[12,13],[14,15],[17,19]]
console.log(intervalIntersection(A,B));