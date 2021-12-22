const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + 'px';
div.style.top = `${divY}px`;

let drawActive = false;
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', () => {
	div.style.backgroundColor = 'red';
	drawActive = !drawActive;

	insertDivX = event.offsetX;
	insertDivY = event.offsetY;
	console.log(insertDivY, insertDivX);
});

div.addEventListener('mousemove', () => {
	if (drawActive) {
		divX = event.clientX - insertDivX;
		divY = event.clientY - insertDivY;
		div.style.left = `${divX}px`;
		div.style.top = `${divY}px`;
	}
});
div.addEventListener('mouseup', () => {
	div.style.backgroundColor = 'black';
	drawActive = !drawActive;
});
