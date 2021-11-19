const paperImg = document.querySelector('[title = "Papier"]');
const rockImg = document.querySelector('[title = "Kamień"]');
const scissorsImg = document.querySelector('[title = "nożyczki"]');
const spanOne = document.querySelector('[data-summary="your-choice"]');
const playBtn = document.querySelector('.start');
const imgAll = document.querySelectorAll('img');
const winnerOfTheGame = document.querySelector('[data-summary="who-win"]');
const computerChoice = document.querySelector('[data-summary="ai-choice"]');
const gamePlayed = document.querySelector('.numbers span:first-of-type');
const gameWin = document.querySelector('.wins span:first-of-type');
const gameLose = document.querySelector('.losses span:first-of-type');
const gameDraws = document.querySelector('.draws span:first-of-type');
const aiChoice = ['Papier', 'Kamień', 'Nożyczki'];
const score = {
	gameNumber: 0,
	winScore: 0,
	loseScore: 0,
	drawScore: 0,
};
const myChoice = [];
const aiChoiceOne = [];

const removeClass = () => {
	[].forEach.call(imgAll, (el) => {
		el.classList.remove('select_img');
	});
};
const chooseYourOption = (playerChoice, imgName, optionText) => {
	myChoice.length = 0;
	aiChoiceOne.length = 0;
	computerChoice.textContent = '';
	myChoice.push(playerChoice);
	imgName.classList.add('select_img');
	spanOne.textContent = optionText;
};
const winnerAnnouncement = (komunikat, imgName) => {
	winnerOfTheGame.textContent = komunikat;
	myChoice.length = 0;
	imgName.classList.remove('select_img');
	switch (komunikat) {
		case 'Wygrałem!':
			score.winScore++;
			gameWin.textContent = score.winScore;
			break;
		case 'Komputer wygrał!':
			score.loseScore++;
			gameLose.textContent = score.loseScore;
			break;
		case 'Remis!':
			score.drawScore++;
			gameDraws.textContent = score.drawScore;
	}
	score.gameNumber++;
	gamePlayed.textContent = score.gameNumber;
};
const chooseOne = () => {
	removeClass();
	chooseYourOption(1, paperImg, 'Papier');
};
const chooseTwo = () => {
	removeClass();
	chooseYourOption(2, rockImg, 'Kamień');
};
const chooseThree = () => {
	removeClass();
	chooseYourOption(3, scissorsImg, 'Nożyczki');
};
const startPlayAction = () => {
	aiChoiceOne.length = 0;
	aiChoiceOne.push(Math.floor(Math.random() * 3));
	computerChoice.textContent = aiChoice[aiChoiceOne];
	if (myChoice[0] === 2 && aiChoiceOne[0] === 0) {
		winnerAnnouncement('Komputer wygrał!', rockImg);
	} else if (myChoice[0] === 2 && aiChoiceOne[0] === 1) {
		winnerAnnouncement('Remis!', rockImg);
	} else if (myChoice[0] === 2 && aiChoiceOne[0] === 2) {
		winnerAnnouncement('Wygrałem!', rockImg);
	} else if (myChoice[0] === 3 && aiChoiceOne[0] === 0) {
		winnerAnnouncement('Wygrałem!', scissorsImg);
	} else if (myChoice[0] === 3 && aiChoiceOne[0] === 1) {
		winnerAnnouncement('Komputer wygrał!', scissorsImg);
	} else if (myChoice[0] === 3 && aiChoiceOne[0] === 2) {
		winnerAnnouncement('Remis!', scissorsImg);
	} else if (myChoice[0] === 1 && aiChoiceOne[0] === 0) {
		winnerAnnouncement('Remis!', paperImg);
	} else if (myChoice[0] === 1 && aiChoiceOne[0] === 1) {
		winnerAnnouncement('Wygrałem!', paperImg);
	} else if (myChoice[0] === 1 && aiChoiceOne[0] === 2) {
		winnerAnnouncement('Komputer wygrał!', paperImg);
	} else if (!myChoice.length) {
		alert('Nie wybrałeś opcji');
	}
};
paperImg.addEventListener('click', chooseOne);
rockImg.addEventListener('click', chooseTwo);
scissorsImg.addEventListener('click', chooseThree);
playBtn.addEventListener('click', startPlayAction);
