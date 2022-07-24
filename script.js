const audio1 = document.querySelector(".audio_1");
const audio1Text = document.querySelector(".audio1_text");
const audio2Text = document.querySelector(".audio2_text");
const audio3Text = document.querySelector(".audio3_text");
const audio4Text = document.querySelector(".audio4_text");
const audio5Text = document.querySelector(".audio5_text");
const volume = document.querySelector(".volume");
const pauseAudio = document.querySelector(".pause_audio");
const playAudio = document.querySelector(".play_audio");
const currentMusic = document.querySelector(".current_music");

volume.oninput = function (e) {
  const currentVolume = volume.value;
  audio1.volume = currentVolume;
};

pauseAudio.addEventListener("click", () => {
  audio1.pause();
});
playAudio.addEventListener("click", () => {
  audio1.play();
});
