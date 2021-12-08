class Game {
	constructor() {
		this.h1 = document.querySelector('h1');
		this.h2 = document.querySelector('h2');
		this.h1mid = document.querySelector('h1[id="midday"]');
		this.h1Counting = document.querySelector('h1[id = "h1"]');
		this.flag = false;
		this.playeOneScore = 0;
		this.playerTwoScore = 0;
		document.querySelector(
			'h2[id ="score"]'
		).textContent = `${this.playeOneScore} : ${this.playerTwoScore}`;
		document
			.querySelector('button')
			.addEventListener('click', this.startGame.bind(this));
	}
	winGame(user) {
		this.h1.textContent = `Wygrał: ${user}`;
	}
	startGame() {
		this.h1.textContent = '';
		let number = 3;

		const counting = () => {
			this.h1mid.textContent = '';
			if (number <= 0) {
				clearInterval(interval);
				this.h1Counting.textContent = '';
				this.h1mid.textContent = 'Wybiło południe!';
				this.flag = true;
			} else {
				this.h1Counting.textContent = number;
				number--;
				console.log(number);
			}
		};
		const interval = setInterval(counting, 1000);
	}
	score(playerOne, playerTwo) {
		document.querySelector(
			'h2[id ="score"]'
		).textContent = `${this.playeOneScore} : ${this.playerTwoScore}`;
	}
}

const game = new Game();
