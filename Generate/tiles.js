// 1079. Letter Tile Possibilities
var result = [];
var numTilePossibilities = function(tiles) {
    const sorted = tiles.split('');
    return dfs(sorted);
};

var dfs = function(tiles , seq = "", result = []) {
    if(seq != '') {
      result.push(seq);
    }
    let prev = '';
    for(let i = 0 ; i < tiles.length ; i++) {
         let curr = tiles[i];
         if(prev == curr) {
           continue;
         }
         prev = curr;
         tiles.splice(i,1);
         dfs(tiles, seq + curr, result);
         tiles.splice(i,0,curr);
    }
    return result;
}
console.log(numTilePossibilities("AAB"));