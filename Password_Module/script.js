const input = document.querySelector('input');
const password = ['jedEN', 'Dwa'];
const messages = ['super', 'działa'];
const div = document.querySelector('.message');
const LCPasswords = password.map((password) => password.toLowerCase());

const showMessage = (event) => {
	div.textContent = '';
	const text = event.target.value.toLowerCase();
	for (let i = 0; i < LCPasswords.length; i++) {
		if (LCPasswords[i] === text) {
			div.textContent = messages[i];
		}
	}
};

input.addEventListener('keyup', showMessage);
input.addEventListener('focus', (event) => {
	event.target.classList.add('active');
});

input.addEventListener('blur', (event) => {
	event.target.classList.remove('active');
});
