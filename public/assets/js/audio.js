// Audio
const Audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

// Play audio & show pause btn
const playShow = function () {
  Audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & show play btn
const pauseShow = function () {
  Audio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};

function coinSound() {
  sound.play();
}
