// ---Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// ---Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

// the most efficient solution
const clearStr = (str) =>
  str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");

const anagrams = (stringA, stringB) => {
  return clearStr(stringA) === clearStr(stringB);
};

console.log(anagrams("rail  safety", "fairy tales"));

// first-solution
const charMap = (str) => {
  const charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }

  return charMap;
};

const anagrams1 = (stringA, stringB) => {
  const charMapA = charMap(stringA);
  const charMapB = charMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
};

// console.log(anagrams1("rail safety", "fairy tales"));
// console.log(anagrams1("Hi there", "Bye there"));

// my-solution
const countLetters = (string) => {
  const obj = {};

  const stringToLowerCase = string.toLowerCase();

  for (let char of stringToLowerCase) {
    if (/[a-zA-Z]/.test(char)) {
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
  }

  return Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
};

const anagrams2 = (stringA, stringB) => {
  const charsA = countLetters(stringA);
  const charsB = countLetters(stringB);

  if (charsA.length !== charsB.length) return false;

  for (let i = 0; i < charsA.length; i++) {
    if (charsA[i][0] !== charsB[i][0] || charsA[i][1] !== charsB[i][1]) {
      return false;
    }
  }

  return true;
};
