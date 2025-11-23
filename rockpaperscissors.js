const args = process.argv.slice(2); //process.argv[2] is the text that the user writes after the 'node rockpaperscissors.js'

const validChoices = ['rock', 'paper', 'scissors'];
const userChoice = args[0].toLowerCase();
const computerChoice = validChoices[Math.floor(Math.random() * 3)];

if (!userChoice || !validChoices.includes(userChoice)) {
  console.log('Invalid move. Use rock, paper, or scissors.');
  return;
}

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
