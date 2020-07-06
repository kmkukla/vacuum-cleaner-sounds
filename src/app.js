const sound = document.querySelector(".sound");
const volumeControl = document.querySelector(".range");
const durationBtns = document.querySelectorAll(".btn-duration");
const soundBtns = document.querySelectorAll(".btn-sound");
const timeDisplay = document.querySelector(".time-display");
const playPauseBtn = document.querySelector(".play");
const playPauseImg = document.querySelector(".play-img");
let duration, remaining, timeout;

playPauseBtn.addEventListener("click", togglePlayPause);

document.addEventListener("DOMContentLoaded", function setDefault() {
  sound.src = "./sounds/classic-crop.mp3";
  playPauseImg.src = "./svg/play.svg";
  sound.volume = volumeControl.value / 400;
  duration = 5;
  remaining = duration;
});

sound.addEventListener("timeupdate", function playInLoop() {
  var buffer = 0.44;
  if (sound.currentTime > sound.duration - buffer) {
    sound.currentTime = 0;
    sound.play();
  }
});

soundBtns.forEach((btn) =>
  btn.addEventListener("click", function selectSoundAndPlay() {
    resetTime();
    sound.src = this.dataset.sound;
    togglePlayPause();
  })
);

durationBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    duration = this.dataset.time * 60;
    resetTime();
    displayTime(duration);
  })
);

volumeControl.addEventListener("input", function () {
  sound.volume = volumeControl.value / 400;
});

function togglePlayPause() {
  if (sound.paused) {
    sound.play();
    playPauseImg.src = "./svg/pause.svg";
    updateTime();
  } else {
    clearTimeout(timeout);
    sound.pause();
    playPauseImg.src = "./svg/play.svg";
  }
}

function updateTime() {
  remaining = remaining - 1;

  displayTime(remaining);

  if (remaining > 0) {
    timeout = setTimeout(updateTime, 1000);
  } else {
    resetTime();
  }
}

function displayTime(time) {
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60);
  timeDisplay.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function resetTime() {
  clearTimeout(timeout);
  sound.pause();
  playPauseImg.src = "./svg/play.svg";
  remaining = duration;
}
