// Wichtig weil node die ersten beides Positionen des arrays überspringt und die einegebenen Zahlen/Wörter als Parameter nimmt
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Please provide exactly one string!");
  return;
}

// Kontrolliert das eingegebene Wort
if (args[0] != "rock" && args[0] != "paper" && args[0] != "scissors") {
  console.error("Wrong Input");
  return;
}

const choice = ["rock", "paper", "scissors"];

// Generiert eine Zahl von 0 bis 2
const rdmNumber = Math.floor(Math.random() * 3);
// Wandelt die Zahl zu einem der Strings aus dem Array um
const pcChoice = choice[rdmNumber];

console.log(pcChoice);

if (args[0] === pcChoice) {
  console.log(`You chose ${args[0]}. Computer chose ${pcChoice}. DRAW !`);
} else if (
  (args[0] === "rock" && pcChoice === "scissors") ||
  (args[0] === "paper" && pcChoice === "rock") ||
  (args[0] === "scissors" && pcChoice === "paper")
) {
  console.log(`You chose ${args[0]}. Computer chose ${pcChoice}. You win!`);
} else {
  console.log(`You chose ${args[0]}. Computer chose ${pcChoice}. You lose!`);
}
