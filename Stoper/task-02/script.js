const endTime = new Date('2022-01-25 22:34:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
	const newTime = new Date().getTime();
	const time = endTime - newTime;
	const days = Math.floor(
		endTime / (1000 * 60 * 60 * 24) - newTime / (1000 * 60 * 60 * 24)
	);
	let hours = Math.floor(
		(endTime / (1000 * 60 * 60) - newTime / (1000 * 60 * 60)) % 24
	);
	hours = hours < 10 ? `0${hours}` : hours;

	const minutes = Math.floor(
		(endTime / (1000 * 60) - newTime / (1000 * 60)) % 60
	);
	const secounds = Math.floor((endTime / 1000 - newTime / 1000) % 60);

	spanD.textContent = days;
	spanH.textContent = hours;
	spanM.textContent = minutes;
	spanS.textContent = secounds;
}, 1000);
