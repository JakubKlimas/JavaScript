const li = document.querySelectorAll('li');
const btnOne = document.querySelector('button');
const btnTwo = document.querySelector('ul');
let size = 10;

const adding = function () {
	++size;
	li.forEach((li) => {
		if (!li.style.display) {
			li.style.display = 'block';
		}
		li.style.fontSize = `${size}px`;
	});
};
const subtracting = function () {
	--size;
	li.forEach((li) => {
		if (!li.style.display) {
			li.style.display = 'block';
		}
		li.style.fontSize = `${size}px`;
	});
};

btnOne.addEventListener('click', adding);
btnTwo.addEventListener('click', subtracting);
