let randomLoc= Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;


while (isSunk != true) {
	guess = prompt("Please type in a number between 0 and 6!");
 if (guess > 6 || guess < 0) {
		alert("Please type in a valid number between 0 and 6");
	} else {
		guesses += 1;
	
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Hit!");
			hits += 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sunk my Battleship!");
			}
		} else {
			alert("Miss :(")
		}
	}
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3 / guesses);
alert(stats);
