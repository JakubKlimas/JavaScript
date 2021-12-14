class PlayerOne extends Game {
	constructor() {
		super();
		const game = new Game();
		// this.imgOne = document.querySelector('img[id ="first"]');
		this.player = 'Player One';
		this.imageOne = document.querySelector('div[id="imageOne"]');
		addEventListener('keypress', this.shot.bind(this));
	}
	shot(e) {
		if (game.flag === true) {
			if (e.keyCode === 119) {
				this.imgOne.src =
					'https://freesvg.org/img/Cowboy-Shooting-Gun-Wild-West-Vector-Pixel-Art.png';
				this.imgTwo.src = './Dead-Cowboy-Wild-West-Vector-Pixel-Art.png';
				game.winGame(this.player);
				game.flag = false;
				game.playerOneScore++;
				game.score();
			}
		}
	}
}

const playerOne = new PlayerOne();
