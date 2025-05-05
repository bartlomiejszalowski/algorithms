// -- Directions
// Write a function that rerturns the number of vowels
// used in a string. Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  const vowelCheck = ["a", "e", "i", "o", "u"];

  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) counter++;
  }

  return counter;
};

console.log(vowels("Why do you ask?"));

const vowels1 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

// console.log(vowels1("Hi There!"));
