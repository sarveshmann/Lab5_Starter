// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO

  // Get the horn select element
  const hornSelect = document.getElementById("horn-select");
  // Get the image element
  const imgElement = document.querySelector("img");
  // Get the audio element
  const audioElement = document.querySelector("audio");
  
  // store e.target.value
  let valueForHorn = "";
  // when there's a change in hornSelect, change image and audio src
  hornSelect.addEventListener("change", updateValue);
  function updateValue(e) {
    valueForHorn = e.target.value;

    let srcImg = "assets/images/" + e.target.value + ".svg";
    let srcAudio = "assets/audio/" + e.target.value + ".mp3";
    // change image source
    imgElement.src = srcImg;
    //change audio source
    audioElement.src = srcAudio;
  }

  // play sound button
  const audioButton = document.querySelector("button");
  audioButton.addEventListener("click", (event) => {
    // play the audio
    audioElement.play();

    // if party-horn is selected, do the confetti
    if(valueForHorn == "party-horn"){
      jsConfetti.addConfetti();
    }
  });

  // get the volume control div
  const volDiv = document.getElementById("volume-controls");
  // get the volume control element
  const volControl = document.getElementById("volume");
  // get the image element for volume control
  const volImg = volDiv.querySelector("img");

  // changes icon and volume depending on the slider
  volControl.addEventListener("change", updateAudio);
  function updateAudio(e){
    let vol = volControl.value;

    if(vol == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
      audioElement.volume = 0;
    }

    if(vol >= 1 && vol < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
      audioElement.volume = 0.33;
    }

    if(vol >= 33 && vol < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
      audioElement.volume = 0.67
    }

    if(vol >= 67) {
      volImg.src = "assets/icons/volume-level-3.svg";
      audioElement.volume = 1;
    }
  }
}