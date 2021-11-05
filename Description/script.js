const btn = document.querySelector('button');
let number = 1;

btn.addEventListener('click', function () {
	const li = document.createElement('li');
	li.textContent = number;
	number += 2;
	if (number % 3 == 0) {
		li.classList.add('big');
	}
	document.body.appendChild(li);
	console.log(number);
});
