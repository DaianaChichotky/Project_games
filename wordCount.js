const args = process.argv.slice(2);
const phrase = args
  .join(' ')
  .toLowerCase()
  .replace(/[.,!?;:()"]/g, '');

if (!phrase || phrase.trim() === '') {
  console.log('Please provide a sentence.');
  return;
}

//split the phrase into words
const words = phrase.split(' ').filter((word) => word !== '');

const countWords = {};

for (const word of words) {
  if (countWords[word]) {
    countWords[word]++;
  } else {
    countWords[word] = 1;
  }
}

console.log(countWords);
