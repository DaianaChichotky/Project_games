const args = process.argv.slice(2); //process.argv[2] is the text that the user writes after the 'node palindrome.js'

const phrase = args.join(' ').toLowerCase(); //join all in just 1 string and put all in lower case: ["Hola Que tal?"] --> ["hola que tal?"]
const word = phrase.split(' ').join(''); // remove spaces and join removing spaces: ["hola que tal?"] --> ["hola", "que", "tal", "?"] --> "holaquetal?""

if (!word || word === '') {
  console.log('Please enter text.');
  return;
}

// Resto de tu código para chequear palíndromo

let isPalindrome = true;

for (let index = 0; index < word.length / 2; index++) {
  //we only check the half because we compare the 1st with the last and so on
  if (word[index] !== word[word.length - 1 - index]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${word}" is a palindrome!`);
} else {
  console.log(`"${word}" is NOT a palindrome`);
}
