// Given two strings, write a function to determine if the second string is an anagram of the first.
//  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

//EASY
function createCharMap(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

function validAnagram(str1, str2) {
  const charMap1 = createCharMap(str1);
  const charMap2 = createCharMap(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false;

  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("anagram", "nagaram"));

//REFACTORED
const validAnagram1 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!obj[char]) return false;

    obj[char] -= 1;
  }

  return true;
};

console.log(validAnagram1("anagramzz", "nagaramz"));
