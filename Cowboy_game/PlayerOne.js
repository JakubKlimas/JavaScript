'use strict';

class PlayerOne {
	constructor() {
		const game = new Game();
		this.imgOne = document.querySelector('img[id ="first"]');
		this.player = 'Player One';
		addEventListener('keypress', this.shot.bind(this));
	}
	shot(e) {
		if (game.flag === true) {
			if (e.keyCode === 119) {
				game.winGame(this.player);
				game.flag = false;
				game.playeOneScore++;
				game.score();
			}
		}
	}
}

const playerOne = new PlayerOne();
