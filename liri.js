require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require('axios');

input = process.argv.slice(2);
let [first, ...arr] = input;
let second = arr.join(' ');


functionCall = (action) => {
    switch(action) {
        case 'concert-this':
            concertThis(second);
            break;
        case 'spotify-this-song':
            spotify(second);
            break;
        case 'movie-this':
            omdb(second);
            break;
        case 'do-what-it-says':
            random(second);
            break;
        default:
            console.log('Try to spell your desires correctly.')
            break;
    }
}


concertThis = (second) => {
    let queryUrl =  "https://rest.bandsintown.com/artists/" + second + "/events?app_id=codingbootcamp";
    
    
    axios({
        method:'get',
        url: queryUrl,
    })
    .then(function(response) {
        // console.log(response.data[0].venue.name);
        console.log('Venue Name: ' + response.data[0].venue.name);
        console.log(`Location: ${response.data[0].venue.country} ${response.data[0].venue.city}`)
        console.log('Data: ' + response.data[0].datetime);
    });
    
}

spotify = (second) => {
    var Spotify = require('node-spotify-api');
    
    var spotify = new Spotify({
        id: 'ddb83419448a4c1eb2f106911c355624',
        secret: '5472760615d1459e902b68d389ddae63'
    });
    
    spotify.search({ type: 'track', query: second }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log('Artist: ' + data.tracks.items[0].artists[0].name);
        console.log('Song Name: ' + data.tracks.items[0].name);
        console.log('Preview: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
    });
}

omdb = (second) => {
    let queryUrl = `https://www.omdbapi.com/?t=${second}&apikey=fcc96c64`
    axios({
        method:'get',
        url: queryUrl,
    })
    .then(function(response) {
        console.log('Title: ' + response.data.Title);
        console.log('Released Year: ' + response.data.Year);
        console.log('IMDB Rating: ' + response.data.imdbRating);
        console.log('Rotten Tomatoe Ratings: ' + response.data.Ratings[1].Value);
        console.log('Released Country: ' + response.data.Country);
        console.log('Language: ' + response.data.Language);
        console.log('Plot: ' + response.data.Plot);
        console.log('Actors: ' + response.data.Actors);
    });
}

random = () => {
    fs.readFile('random.txt', "utf8", function(error, data){
        let first = data.split(',')[0];
        let second = data.split(',')[1];
        
        if (error) {
            console.log(error);
        } else if (first === 'spotify-this-song') {
            spotify(second);
        } else if (first === 'concert-this') {
            concertThis(second);
        } else if (first === 'movie-this') {
            omdb(second);
        } else {
            console.log(data);
        }
        
    })
};


functionCall(first);




