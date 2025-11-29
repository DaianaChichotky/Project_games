const args = process.argv.slice(2);

const sentence = args.join(' '); //join all in just 1 string separating each word by empty space
const word = args
  .join('')
  .toLowerCase()
  .normalize('NFD') // to separate letters from the accent
  .replace(/[\u0300-\u036f]/g, ''); // to remove the accent

if (!word || word === '') {
  console.log('Please enter text.');
  return;
}

let isPalindrome = true; //I assume is true until I demonstrate is false

for (let index = 0; index < word.length / 2; index++) {
  //we only check the half because we compare the 1st with the last and so on
  if (word[index] !== word[word.length - 1 - index]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${sentence}" is a palindrome!`);
} else {
  console.log(`"${sentence}" is NOT a palindrome`);
}
