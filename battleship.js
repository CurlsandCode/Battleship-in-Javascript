let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;


while (isSunk != true) {
	guess = prompt("Please type in a number between 0 and 6!")
	if (guess > 6 || guess < 0) {
		alert("Please type in a valid number between 0 and 6")
	} else {
		guesses += 1;
	}
	if (guess == location1 || guess == location2 || guess == location3) {
		alert("Hit!")
		hits += 1;
	} else {
		alert("Miss :(")
	}
	if (hits == 3) {
		isSunk = true;
		alert("You sunk my Battleship!")

	}
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +
		"which means your shooting accuracy was " + (3/guesses);
alert(stats);