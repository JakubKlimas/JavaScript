const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];
const time = 500;
let indexText = 0;
let i = 0;

const addLetter = () => {
	const timeout = setTimeout(addText, time);
	if (i === txt.length) {
		clearTimeout(timeout);
	}
};

const addText = () => {
	const addLetters = () => {
		spnText.textContent += txt[i][indexText];
		indexText++;
		if (indexText > txt[i].length) {
			clearInterval(indexTyping);
			indexText = 0;
			i++;
			spnText.textContent = '';
			if (txt.length > i) addText();
		}
	};
	const indexTyping = setInterval(addLetters, time);
};

addLetter();
