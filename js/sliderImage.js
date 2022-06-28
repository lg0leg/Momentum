const body = document.querySelector('body');
let bgNum = 10;
let timeOfDay = 'day';

function getTimeOfDay() {
    const currentHours = new Date().getHours();
    const arrTimeOfDay = [ 'night', 'morning', 'afternoon', 'evening'];
    let i = Math.floor(currentHours / 6);
    timeOfDay = arrTimeOfDay[i];
}

function getRandomNum() {
    let min = 1;
    let max = 20;
    bgNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    getTimeOfDay();
    bgNum = bgNum.toString();
    bgNum = bgNum.padStart(2, "0");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
    }; 
}

getRandomNum();
setBg()

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getSlideNext() {
    if (bgNum < 20) {bgNum++} else {bgNum = 1};
    setBg()
}

function getSlidePrev() {
    if (bgNum > 1) {bgNum--} else {bgNum = 20};
    setBg()
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


