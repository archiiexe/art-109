let sfx1 = document.querySelector("#sfx1");
let sfx2 = document.querySelector("#sfx2");
let sfx3 = document.querySelector("#sfx3");
let sfx4 = document.querySelector("#sfx4");
let sfx5 = document.querySelector("#sfx5");
let sfx6 = document.querySelector("#sfx6");
let sfx7 = document.querySelector("#sfx7");
let sfx8 = document.querySelector("#sfx8");
let sfx11 = document.querySelector("#sfx11");
let sfx22 = document.querySelector("#sfx22");
let sfx33 = document.querySelector("#sfx33");
let sfx44 = document.querySelector("#sfx44");
let sfx55 = document.querySelector("#sfx55");
let sfx66 = document.querySelector("#sfx66");
let sfx77 = document.querySelector("#sfx77");


// let playBtn = document.querySelector("#play-button");
// let stopBtn = document.querySelector("#stop-button");
sfx1.play();
// playBtn.addEventListener("click", function(){

//    sfx1.play();  
// console.log("play")})

// stopBtn.addEventListener("click", function(){
// song.pause();
// console.log("stop")})

// let volumeControl = document.getElementById('volume');

// song.volume = volumeControl.value / 100;
// volumeControl.addEventListener('input', () => {
//   song.volume = volumeControl.value / 100;
//   console.log(song.volume);
//   console.log(volumeControl);
// });


// const soundEffects = [sfx1, sfx2, sfx3, sfx4, sfx5, sfx6, sfx7, sfx8];
document.addEventListener('keydown', (event) => {
  // Reset audio position before playing
  const resetAndPlay = (sfx) => {
    sfx.currentTime = 0;
    sfx.play().catch(e => console.log("Playback failed:", e));
  };

  // Check each key individually
  if (event.key === '1') {
    sfx1.play();
    console.log("Playing sound 1");
  }
  else if (event.key === '2') {
    resetAndPlay(sfx2);
    console.log("Playing sound 2");
  }
  else if (event.key === '3') {
    resetAndPlay(sfx3);
    console.log("Playing sound 3");
  }
  else if (event.key === '4') {
    resetAndPlay(sfx4);
    console.log("Playing sound 4");
  }
  else if (event.key === '5') {
    resetAndPlay(sfx5);
    console.log("Playing sound 5");
  }
  else if (event.key === '6') {
    resetAndPlay(sfx6);
    console.log("Playing sound 6");
  }
  else if (event.key === '7') {
    resetAndPlay(sfx7);
    console.log("Playing sound 7");
  }
  else if (event.key === '8') {
    resetAndPlay(sfx8);
    console.log("Playing sound 8");
  }

  else if (event.key === 'a') {
    resetAndPlay(sfx11);
    console.log("Playing sound a");
  }
  else if (event.key === 's') {
    resetAndPlay(sfx22);
    console.log("Playing sound 8");
  }
  else if (event.key === 'd') {
    resetAndPlay(sfx33);
    console.log("Playing sound 8");
  }
  else if (event.key === 'f') {
    resetAndPlay(sfx44);
    console.log("Playing sound 8");
  }
  else if (event.key === 'w') {
    resetAndPlay(sfx55);
    console.log("Playing sound 8");
  }
  else if (event.key === 'e') {
    resetAndPlay(sfx66);
    console.log("Playing sound 8");
  }
  else if (event.key === 'r') {
    resetAndPlay(sfx77);
    console.log("Playing sound 8");
  }
});

