'use strict';

class PlayerTwo {
	constructor() {
		const game = new Game();
		this.imgOne = document.querySelector('img[id ="first"]');
		this.player = 'Player Two';

		addEventListener('keypress', this.shot.bind(this));
	}
	shot(e) {
		if (game.flag === true) {
			console.log(e.keyCode);
			if (e.keyCode === 112) {
				game.winGame(this.player);
				game.flag = false;
				game.playerTwoScore++;
				game.score();
			}
		}
	}
}

const playerTwo = new PlayerTwo();
