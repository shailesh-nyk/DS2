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
    let songToGenreMap = {};
    for(let genre in songGenres) {
        for(let i = 0 ; i < songGenres[genre].length ; i++) {
            songToGenreMap[songGenres[genre][i]] = genre;
        }
    }
    for(let user in userSongs) {
        let max = 0;
        let favMap = {};
        for(let i= 0 ; i < userSongs[user].length ; i++) {
             favMap[songToGenreMap[userSongs[user][i]]] =  favMap[songToGenreMap[userSongs[user][i]]] ? favMap[songToGenreMap[userSongs[user][i]]] + 1 : 1;
             max = favMap[songToGenreMap[userSongs[user][i]]] > max ? favMap[songToGenreMap[userSongs[user][i]]] : max ;
        }
        userSongs[user] = [];
        for(let key in favMap) {
            if(favMap[key] == max) 
                userSongs[user].push(key);
        }
    }
    console.log(userSongs);
}
favoriteGenre(userSongs, songGenres);
