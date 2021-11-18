const possibilities = ['walcz', 'przemyśl to jeszcze raz'];
const btnAdd = document.querySelector('.add');
const btnRemove = document.querySelector('.clean');
const btnAdvise = document.querySelector('.showAdvice');
const h1 = document.querySelector('h1');
const btnOpportunity = document.querySelector('.showOptions');

const addPossibilities = (e) => {
	e.preventDefault();
	const input = document.querySelector('input');
	const text = input.value;
	if (text.length) {
		for (possibilite of possibilities) {
			if (possibilite === text) {
				alert(`Już jest taka możliwość`);
			}
		}
		possibilities.push(text);
		input.value = '';
		alert(`Dodałeś ${text}`);
	}
};

const removePossibilites = () => {
	possibilities.length = 0;
};

const showAdvise = () => {
	const index = Math.floor(Math.random() * possibilities.length);
	console.log(index);

	h1.textContent = possibilities[index];
};

const showOpportunity = () => {
	alert(`Możliwe opcje to: ${possibilities}`);
};

btnAdd.addEventListener('click', addPossibilities);
btnRemove.addEventListener('click', removePossibilites);
btnAdvise.addEventListener('click', showAdvise);
btnOpportunity.addEventListener('click', showOpportunity);
