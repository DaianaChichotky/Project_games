const args = process.argv.slice(2);

const validChoices = ['rock', 'paper', 'scissors'];
const userChoice = args[0]?.toLowerCase(); //the "?" is to avoid error if user leave the argument empty
const computerChoice =
  validChoices[Math.floor(Math.random() * validChoices.length)];

if (!userChoice || !validChoices.includes(userChoice)) {
  console.log('Invalid move. Use rock, paper, or scissors.');
  return;
}

let resultText;

if (userChoice === computerChoice) {
  resultText = 'Draw';
} else if (
  (userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'paper' && computerChoice === 'rock') ||
  (userChoice === 'scissors' && computerChoice === 'paper')
) {
  resultText = 'You win!';
} else {
  resultText = 'You lose!';
}

console.log(
  `You: ${userChoice} | Computer: ${computerChoice} -> ${resultText}`
);
