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

// document.addEventListener('keydown',
//   function (e) {
//     let clicked = false;
//     // console.log(e.key)
//     if (e.key === ' ' && clicked === false) {
//         audio1.pause();
//         console.log(1)
//         clicked = true;
//     }
//     if (e.key === ' ' && clicked === true) {
//       audio1.play();
//     }
//   }
// );



const translateProgress1 = function () {
  let value = 0;
  let interval = setInterval(function () {
    let progressBar = document.querySelector(".progress1");
    value = (audio1.currentTime / audio1.duration) * 100;
    progressBar.style.width = `${value}%`;
    progressBar.textContent = "Playing";
    if (value === 90) {
      progressBar.textContent = "Played";
      clearInterval(interval);
      value = 0;
    }
  }, 358);
};


audio1Text.addEventListener("click", () => {
  audio1.src = `./song/alone.mp3`;
  audio1.play();
  currentMusic.textContent = audio1Text.textContent;
  translateProgress1();
});

audio2Text.addEventListener("click", () => {
  audio1.src = `song/home.mp3`;
  audio1.load();
  audio1.play();
  currentMusic.textContent = audio2Text.textContent;

  translateProgress1();
});



audio3Text.addEventListener("click", () => {
  audio1.src = `song/play.mp4`;
  audio1.load();
  audio1.play();
  currentMusic.textContent = audio3Text.textContent;

  translateProgress1();
});
audio4Text.addEventListener("click", () => {
  audio1.src = `song/runaway.mp3`;
  audio1.load();
  audio1.play();
  currentMusic.textContent = audio4Text.textContent;

  translateProgress1();
});


audio5Text.addEventListener("click", () => {
  audio1.src = `song/alone.mp3`;
  audio1.load();
  audio1.play();
  currentMusic.textContent = audio5Text.textContent;

  translateProgress1();
});

const myDetails = `Developed by David Micah-Daniles @ july 19, 2022`;
const moreDetails = `My name is David Micah-Daniles i am a 15 years old programmer and frontend developer at the moment, i developed this website to improve my javaScript skill`;
// localStorage.setItem('Details', JSON.stringify(myDetails));
localStorage.setItem('More-Details', JSON.stringify(moreDetails));

const developer = JSON.parse(localStorage.getItem('Details'));
