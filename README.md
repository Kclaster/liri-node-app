# liri-node-app

#Liri Nod App

Liri is an app designed to retrieve data from various api's given a command. 
The commands are as follows:
*concert-this
*spotify-this-song
*movie-this
*do-what-it-says

## concert-this
The concert-this command retrieves access to a venue, location, and date of an event. 
![concer-this-snapshot](/pics/concert-this.png)


## spotify-this-song
The spotifiy-this-song command retrieves to following data points:
*Artist(s)
*The song's name
*A preview link of the song from Spotify
*The album that the song is from
   
   ### If no song is given, the command will retrieve data for "The Sign", by Ace of Base.
 
![spotify-this-song](/pics/spotify-this-song.png)


## movie-this
The movie-this command retrieves to following data points:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

   
   ### If no movie is given, the command will retrieve data for "Mr. Nobodoy."
 
![movie-this](/pics/movie-this.png)



## do-what-it-says
The do-what-it-says command reads from the built in random.txt file and performs the command written.
![do-what-it-says](/pics/do-what-it-says.png)
