//Pull track then pull track id to put in the url of the variable lyrics 
var trackID ="";
var getLyrics = function(){
    var lyrics = "track.lyrics.get?" + trackID;
    fetch(lyrics);
}
var getTrack = function(){
    
}