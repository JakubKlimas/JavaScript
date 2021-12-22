const li = document.querySelectorAll('li');
const btnOne = document.querySelector('button');
const btnTwo = document.querySelector('ul');

let size = 10;
let increase = 1;

const adding = function () {
	const liNew = document.createElement('li');
	document.body.appendChild(liNew);
	liNew.style.display = 'block';
	liNew.style.fontSize = `${size}px`;
	liNew.textContent = `element ${increase}`;
	++increase;
	++size;
	li.forEach((li) => {
		if (!li.style.display) {
			li.style.display = 'block';
		}
	});
};
const subtracting = function () {
	const liNewDelete = document.querySelector('li');
	liNewDelete.parentNode.removeChild(liNewDelete);
	--increase;
	--size;
	liNew.style.fontSize = `${size}px`;
	liNew.textContent = `element ${increase}`;
	li.forEach((li) => {
		if (!li.style.display) {
			li.style.display = 'block';
		}
		li.style.fontSize = `${size}px`;
	});
};

btnOne.addEventListener('click', adding);
btnTwo.addEventListener('click', subtracting);
