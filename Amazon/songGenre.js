var userSongs = {  
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma":  ["song5", "song6", "song7"]
}
var songGenres = {  
    "Rock":    ["song1", "song3"],
    "Dubstep": ["song7"],
    "Techno":  ["song2", "song4"],
    "Pop":     ["song5", "song6"],
    "Jazz":    ["song8", "song9"]
}

var favoriteGenre = function(userSongs, songGenres) {
    for(let song in userSongs) {
        let songArr = userSongs[song];
        let genreMap = {};
        let result = [];
        let max = 0;
        for(let i = 0; i < songArr.length ; i++) {
            for(let genre in songGenres) {
                if(songGenres[genre].includes(songArr[i])) {
                    genreMap[genre] = genreMap[genre] ? genreMap[genre] + 1 : 1;
                    if(genreMap[genre] > max) {
                        max = genreMap[genre];
                    }
                }
            }
        }
        for(let key in genreMap) {
            if(genreMap[key] == max) {
                result.push(key);
            }
        }
        userSongs[song] = result;
    }
    console.log(userSongs);
}
favoriteGenre(userSongs, songGenres);
