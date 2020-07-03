const sound = document.querySelector(".sound");
const play = document.querySelector(".play");
const sounds = document.querySelectorAll(".btn-sound");
const timeDisplay = document.querySelector(".time-display");
const timeSelect = document.querySelectorAll(".btn-duration");
let fakeDuration = 600;
sound.volume = 0.1;

play.addEventListener("click", () => {
  checkPlaying(sound);
});
const checkPlaying = (sound) => {
  if (sound.paused) {
    sound.play();
    play.src = "./public/svg/pause.svg";
  } else {
    sound.pause();
    play.src = "./public/svg/play.svg";
  }
};

timeSelect.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time") * 60;
    let seconds = Math.floor(fakeDuration % 60);
    let minutes = Math.floor(fakeDuration / 60);
    timeDisplay.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    sound.currentTime = 0;
  });
});

sound.ontimeupdate = function () {
  let currentTime = sound.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  if (currentTime >= fakeDuration) {
    sound.pause();
    sound.currentTime = 0;
    play.src = "./public/svg/play.svg";
  }
};

sounds.forEach((soundBtn) => {
  soundBtn.addEventListener("click", function () {
    sound.src = this.getAttribute("data-sound");
    checkPlaying(sound);
  });
});
