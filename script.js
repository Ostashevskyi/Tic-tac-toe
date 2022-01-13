const gameArea = document.querySelectorAll('.item');

const player1Name = prompt("Player1 enter your name");
const player2Name = prompt("Player2 enter your name");

let counter = 0,
	x = 0,
	o = 0;

function playerTurn() {
	if (counter % 2 == 0) {
		this.firstElementChild.value = "X"
		if (!this.firstElementChild.disabled == true) {
			counter++;
			x++
		}
		this.firstElementChild.disabled = true
	} else {
		this.firstElementChild.value = "O"
		if (!this.firstElementChild.disabled == true){
			counter++
			o++
		}
		this.firstElementChild.disabled = true
	}
}


for (let i = 0; i < gameArea.length; i++) {
	gameArea[i].addEventListener('click', playerTurn);
}

function createNewGameBtn() {
	document.querySelector('.restartBtn').classList.add('active');
	document.querySelector('.restartBtn').addEventListener('click', newGame);
}

function clear() {
	document.querySelector('.restartBtn').classList.remove("active");
	document.querySelector('.winnerText').innerHTML = "";
}

function createWinnerAnouncent() {
	if (x > o) {
		document.querySelector('.winnerText').innerHTML = `${player1Name} WIN!!`;
	} else if (x == o) {
		document.querySelector('.winnerText').innerHTML = `${player2Name} WIN!!`;
	}
}

function newGame() {
	for (let i = 0; i < gameArea.length; i++) {
		gameArea[i].firstElementChild.value = "";
		gameArea[i].firstElementChild.disabled = false;
	}
	counter = 0;
	x = 0;
	o = 0;
	clear()
};

window.onclick = () => {
	const A1 = document.querySelector('.A1').getAttribute("value");
	const A2 = document.querySelector('.A2').getAttribute("value");
	const A3 = document.querySelector('.A3').getAttribute('value');
	const B1 = document.querySelector('.B1').getAttribute('value');
	const B2 = document.querySelector('.B2').getAttribute('value');
	const B3 = document.querySelector('.B3').getAttribute('value');
	const C1 = document.querySelector('.C1').getAttribute('value');
	const C2 = document.querySelector('.C2').getAttribute('value');
	const C3 = document.querySelector('.C3').getAttribute('value');

	let winCondX = {
		a1a2a3: A1 == "X" && A2 == "X" && A3 == "X" || A1 == "O" && A2 == "O" && A3 == "O",
		b1b2b3: B1 == "X" && B2 == "X" && B3 == "X" || B1 == "O" && B2 == "O" && B3 == "O",
		c1c2c3: C1 == "X" && C2 == "X" && C3 == "X" || C1 == "O" && C2 == "O" && C3 == "O",
		a1b1c1: A1 == "X" && B1 == "X" && C1 == "X" || A1 == "O" && B1 == "O" && C1 == "O",
		a2b2c2: A2 == "X" && B2 == "X" && C2 == "X" || A2 == "O" && B2 == "O" && C2 == "O",
		a3b3c3: A3 == "X" && B3 == "X" && C3 == "X" || A3 == "O" && B3 == "O" && C3 == "O",
		a1b2c3: A1 == "X" && B2 == "X" && C3 == "X" || A1 == "O" && B2 == "O" && C3 == "O",
		a3b2c1: A3 == "X" && B2 == "X" && C1 == "X" || A3 == "O" && B2 == "O" && C1 == "O",
	}

	if (winCondX.a1a2a3 || winCondX.b1b2b3 || winCondX.c1c2c3 || winCondX.a1b1c1 || winCondX.a2b2c2 || winCondX.a3b3c3 || winCondX.a1b2c3 || winCondX.a3b2c1) {
		console.log(`X: ${x}, O: ${o}`);
		for (let i = 0; i < gameArea.length; i++) {
			gameArea[i].firstElementChild.disabled = true;			
		}
		createWinnerAnouncent()
		createNewGameBtn()
	} else if (counter == 9 && (!winCondX.a1a2a3 || !winCondX.b1b2b3 || !winCondX.c1c2c3 || !winCondX.a1b1c1 || !winCondX.a2b2c2 || !winCondX.a3b3c3 || !winCondX.a1b2c3 || !winCondX.a3b2c1)) {
		document.querySelector('.winnerText').innerHTML = "DRAW";
		createNewGameBtn()
	}
};