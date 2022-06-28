const player = document.querySelector('#player');
const playPrevBtn = document.querySelector('.play-prev');
const playPouse = document.querySelector('#playPouse');
const playNextNtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

import playList from './playList.js';

const audio = new Audio();


playPouse.addEventListener('click', playAudio)

function playAudio() {
    audio.src = playList[playNum].src;
    if (!isPlay) {
        // audio.currentTime = 0;
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
    toggleIconPlayPouse();
    toggleIconActiveTrack()
}

function toggleIconPlayPouse() {
    if (isPlay) {
        playPouse.classList.remove('play');
        playPouse.classList.add('pause')
    } else {
        playPouse.classList.remove('pause');
        playPouse.classList.add('play')
    }
    
}

playPrevBtn.addEventListener('click', playPrev)
playNextNtn.addEventListener('click', playNext)

function playNext(){
    if (playNum < playList.length - 1) {
        ++playNum;
    } else {
        playNum = 0;
    }
    isPlay = false;
    playAudio()
}

function playPrev() {
    if (playNum > 0) {
        --playNum;
    } else {
        playNum = playList.length - 1;
    }
    isPlay = false;
    playAudio()
}


for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    playListContainer.append(li);
}

const playItems = document.querySelectorAll('.play-item');

function toggleIconActiveTrack() {
    for (let i = 0; i < playList.length; i++) {
        playItems[i].classList.remove('item-active');
    } 
    playItems[playNum].classList.add('item-active');
}

toggleIconActiveTrack()

//start custom player

const customControlsAaudio = document.querySelector('.custom-controls-audio');
const currentCsAudio = document.querySelector('.current-cs-audio');
const lengthCsAudio = document.querySelector('.length-cs-audio');
const volumeButton = document.querySelector('.volume-button');
const timelineAudio = document.querySelector('.timeline-audio');
const progressAudio = document.querySelector('.progress-audio');
const volumeSlider = document.querySelector('.volume-slider');
const volumePercentage = document.querySelector('.volume-percentage');

//прогресс бар и счетчики времени

audio.addEventListener("loadeddata",() => {
    lengthCsAudio.textContent = getTimeCodeFromNum(
        audio.duration
      );
      audio.volume = .75;
    },
    false
);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

timelineAudio.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timelineAudio).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
    progressAudio.style.width = audio.currentTime / audio.duration * 100 + "%";
    currentCsAudio.textContent = getTimeCodeFromNum(
      audio.currentTime
    );
    if (audio.currentTime > audio.duration - 1) {playNext()}
}, 500);


//Громкость и мут

volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumePercentage.style.width = newVolume * 100 + '%';
}, false)

volumeButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeButton.classList.remove("volume-button-unmute");
      volumeButton.classList.add("volume-button-mute");
    } else {
      volumeButton.classList.add("volume-button-unmute");
      volumeButton.classList.remove("volume-button-mute");
    }
});






