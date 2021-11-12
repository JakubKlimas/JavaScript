let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
window.addEventListener('keydown', (event) => {
	document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	if (event.keyCode === 40) {
		if (red >= 0) {
			red--;
			green--;
			blue--;
		}
	} else if (event.keyCode === 38) {
		if (red >= 255) {
			red++;
			green++;
			blue++;
		}
	}
});
