const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Please provide exactly 2 numbers and 1 operator (+, -, *, /');
  console.error('The structure must be: number operator number');
  return;
}

const num1 = parseFloat(args[0]); //parseFloat is to convert string to float
const operator = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2) || !['+', '-', '*', '/'].includes(operator)) {
  console.error(
    'Both arguments must be numbers and a valid operator (+, -, *, /)'
  );
  console.error('The structure must be: number operator number');
  return;
}

let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.error('Cannot divide by zero.');
      return;
    }
    result = num1 / num2;
    break;
  default:
    console.error('Operator must be one of +, -, *, /.');
    break;
}

console.log(`${num1} ${operator} ${num2} -> ${result}`);
return;
