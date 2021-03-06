class Game {
	constructor() {
		this.h1 = document.querySelector('h1');
		this.h2 = document.querySelector('h2');
		this.imgTwo = document.querySelector('img[id ="secound"]');
		this.imgOne = document.querySelector('img[id ="first"]');
		this.h1mid = document.querySelector('h1[id="midday"]');
		this.h1Counting = document.querySelector('h1[id = "h1"]');
		this.flag = false;
		this.playerOneScore = 0;
		this.playerTwoScore = 0;
		document.querySelector(
			'h2[id ="score"]'
		).textContent = `${this.playerOneScore} : ${this.playerTwoScore}`;
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
			this.imgOne.src =
				'https://freesvg.org/img/Cowboy-With-Guns-Standing-Wild-West-Vector-Pixel-Art.png';
			this.imgTwo.src =
				'./Cowboy-With-Guns-Standing-Wild-West-Vector-Pixel-Art.png';
			this.h1mid.textContent = '';
			if (number <= 0) {
				clearInterval(interval);
				this.h1Counting.textContent = '';
				this.h1mid.textContent = 'Wybiło południe!';
				this.flag = true;
			} else {
				this.h1Counting.textContent = number;
				number--;
			}
		};
		const interval = setInterval(counting, 1000);
	}
	score(playerOne, playerTwo) {
		document.querySelector(
			'h2[id ="score"]'
		).textContent = `${this.playerOneScore} : ${this.playerTwoScore}`;
	}
}

const game = new Game();
