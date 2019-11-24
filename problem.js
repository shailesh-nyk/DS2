
var grid = 
[
    [0,1,0,0],
    [0,0,0,0]
];
var rows = 2;
var columns = 4;
var k = 2;
var rules = ['dead', 'alive', 'dead', 'dead', 'dead', 'dead', 'dead', 'dead', 'dead']

var game = function() {
    for(let i = 0 ; i < rules.length ; i++) {
        rules[i] = rules[i] === 'dead' ? 0 : 1;
    }
    for(let i = 0 ; i < k ; i++) {
        let result = [];
        for(let i = 0 ; i < rows; i ++) {
            let row = [];
            for(let j = 0 ; j < columns ; j++) {
               row.push(0);
            }
            result.push(row);
        }
        for(let i = 0 ; i < rows; i ++) {
            for(let j = 0 ; j < columns ; j++) {
                result[i][j] = rules[getAliveCells(i,j)]
            }
        }
        for(let i = 0 ; i < rows; i ++) {
            for(let j = 0 ; j < columns ; j++) {
               grid[i][j] = result[i][j];
            }
        }
    }
}

var getAliveCells = function(i , j) {
    let count = 0;
    for (let dx = (i > 0 ? -1 : 0); dx <= (i < rows - 1 ? 1 : 0); dx++){
        for (let dy = (j > 0 ? -1 : 0); dy <= (j < columns - 1 ? 1 : 0); dy++)
        {
            if (dx != 0 || dy != 0)
            {
                count += grid[i + dx][j + dy];
            }
        }
    }
    return count;
}

game();