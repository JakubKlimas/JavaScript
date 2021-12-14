class PlayerTwo extends Game {
	constructor() {
		super();
		const game = new Game();
		// this.imgTwo = document.querySelector('img[id ="secound"]');
		this.player = 'Player Two';
		addEventListener('keypress', this.shot.bind(this));
	}
	shot(e) {
		if (game.flag === true) {
			console.log(e.keyCode);
			if (e.keyCode === 112) {
				this.imgTwo.src =
					'./Cowboy-Shooting-Gun-Wild-West-Vector-Pixel-Art.png';
				this.imgOne.src =
					'https://freesvg.org/img/Dead-Cowboy-Wild-West-Vector-Pixel-Art.png';
				game.winGame(this.player);
				game.flag = false;
				game.playerTwoScore++;
				game.score();
			}
		}
	}
}

const playerTwo = new PlayerTwo();
