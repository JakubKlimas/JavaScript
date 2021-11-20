const spnText = document.querySelector('.text');
const txt = 'Losowy tekst do testowania funkcjonalności tego kodu';

let indexText = 0;
const time = 60;

const addLetter = () => {
	spnText.textContent += txt[indexText];
	indexText++;
	if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
