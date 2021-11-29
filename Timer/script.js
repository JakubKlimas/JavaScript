const timer = () => {
	let time = 0;
	function showTime() {
		document.body.textContent = `${time} sekund`;
		time++;
	}
	return showTime;
};

const clock = timer();

setInterval(clock, 1000);
