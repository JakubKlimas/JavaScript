const clock = () => {
	const time = new Date();
	const secounds =
		time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
	const minutes =
		time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
	const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

	document.querySelector(
		'.clock span'
	).textContent = `${hours}:${minutes}:${secounds}`;
};

setInterval(clock, 1000);
