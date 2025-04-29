// --- Directions
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (sentence) => {
  const splittedWords = sentence.split(" ");
  const result = [];

  for (let sentence of splittedWords) {
    const firstLetter = sentence[0].toUpperCase();
    const rest = sentence.slice(1);
    result.push(firstLetter + rest);
  }

  return result.join(" ");
};

console.log(capitalize("look, it is working!"));
