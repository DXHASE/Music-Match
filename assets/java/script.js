//Pull track then pull track id to put in the url of the variable lyrics 
// Grab user input to find the track and the artist needed

var inputForm = document.querySelector("#input-form");
var userInput = document.querySelector(".input");
//var trackId ="";
function getTrack(event){
   event.preventDefault();
   var trackUrl = "https://api.musixmatch.com/ws/1.1/track.lyric.get?" + trackId;
   var input = userInput.value.trim()
   .then(function(){

   });
   console.log(input)
}
inputForm.addEventListener("submit",getTrack);
