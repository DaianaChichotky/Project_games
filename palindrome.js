const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Please provide exactly 2 numbers and 1 operator (+, -, *, /');
  return;
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operator = args[2];
