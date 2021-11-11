let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
window.addEventListener('keydown', (event) => {
	document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	console.log(event.keyCode, event.which);
	if (event.keyCode === 40) {
		red--;
		green--;
		blue--;
	} else if (event.keyCode === 38) {
		++red;
		++green;
		++blue;
	}
});
