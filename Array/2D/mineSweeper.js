// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

function minesweeper(matrix) {
    var result = [];
    console.log(matrix);
    console.log(result);
    for(let i = 0 ; i < matrix.length; i++) {
        let temp = [];
        for(let j = 0 ; j < matrix[0].length; j++) {
            if(matrix[i][j] == true){
                temp.push(1);
            } else {
                temp.push(countMines(i,j,matrix));
            }
        }
        result.push(temp);
    }
    return result;
}

function countMines(i, j, matrix) {
    let rowStart = i - 1 < 0 ? i : i - 1;
    let rowEnd = i + 1 > matrix.length - 1 ? i : i + 1;
    let colStart = j - 1 < 0 ? j : j - 1;
    let colEnd = j + 1 > matrix[0].length - 1 ? j : j + 1;
    let counter = 0;
    for(let I = rowStart; I <= rowEnd; I++) {
        for(let J = colStart; J <= colEnd; J++) {
            if(I == i && J == j) continue;
            if(matrix[I][J] == true) counter++;
        }
    }
    return counter;
}

let input = [[true, false, false],
            [false, true, false],
            [false, false, false]];
console.log(minesweeper(input));