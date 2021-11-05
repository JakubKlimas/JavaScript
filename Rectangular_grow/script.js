const div = document.createElement('div');
document.body.appendChild(div);

let size = 100;
let grow = true;

div.style.height = size + 'px';

window.addEventListener('scroll', () => {
	if (grow == true) {
		size += 5;
		div.style.height = size + 'px';
		div.style.backgroundColor = 'green';
	} else {
		size -= 5;
		div.style.height = size + 'px';
		div.style.backgroundColor = 'red';
	}
	if (size > window.innerHeight) {
		grow = !grow;
	} else if (size <= 0) {
		grow = !grow;
	}
});
