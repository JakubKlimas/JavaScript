const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const stoperField = document.querySelector('.time div');
let flag = false;
let minutes = 0;
let milisecounds = 0;
let secounds = 0;
let hours = 0;
let idI;

const startStopera = () => {
	milisecounds++;
	if (milisecounds > 60) {
		secounds++;
		milisecounds = 0;
	} else if (secounds > 60) {
		minutes++;
		secounds = 0;
	} else if (minutes > 60) {
		hours++;
		minutes = 0;
	}
	stoperField.textContent = `${minutes}:${secounds}:${(milisecounds =
		milisecounds < 10 ? `0${milisecounds}` : `${milisecounds}`)}`;
};
const stopStoper = () => {
	clearInterval(idI);
	flag = true;
	startBtn.textContent = 'Start';
};
const startStoper = () => {
	flag = false;
	startBtn.textContent = 'Stop';
	idI = setInterval(startStopera, 5);
};
const whichState = () => {
	flag === true ? startStoper() : stopStoper();
};
const resetStoper = () => {
	minutes = 0;
	milisecounds = 0;
	secounds = 0;
	hours = 0;
	active = false;
	clearInterval(idI);
	startBtn.textContent = 'Start';
	stoperField.textContent = '---';
};

startBtn.addEventListener('click', whichState);
resetBtn.addEventListener('click', resetStoper);
