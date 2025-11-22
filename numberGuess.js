const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);
const randomNum = Math.floor(Math.random() * (11 - 1) + 1); // 1-10 inclusive

if (args.length !== 1) {
  console.error('Please provide exactly 1 number');
  return;
}

if (isNaN(num1)) {
  console.error('Invalid input. Please enter a number.');
  return;
} else if (num1 > 100 || num1 < 0) {
  console.error('Guess must be between 1 and 100.');
  return;
}

console.log(`You number is ${num1} and randonNum is ${randomNum}`);

if (num1 < randomNum) {
  console.log('Too low! Try again.');
  return;
} else if (num1 > randomNum) {
  console.log('Too high! Try again');
  return;
} else console.log('Correct! You found it in 3 tries!');
return;
