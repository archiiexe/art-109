let song = document.querySelector("#song");

let playBtn = document.querySelector("#play-button");
let stopBtn = document.querySelector("#stop-button");

playBtn.addEventListener("click", function(){

   song.play();  
console.log("play")})

stopBtn.addEventListener("click", function(){
song.pause();
console.log("stop")})

let volumeControl = document.getElementById('volume');
  
  song.volume = volumeControl.value / 100;

  // Update volume when slider changes
  volumeControl.addEventListener('input', () => {
    song.volume = volumeControl.value / 100;
  });