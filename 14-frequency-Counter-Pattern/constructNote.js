// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
//  The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
  const charCounter = {};

  for (let char of letters) {
    if (charCounter[char]) {
      charCounter[char] += 1;
    } else {
      charCounter[char] = 1;
    }
  }

  for (let letter of message) {
    if (!charCounter[letter]) {
      return false;
    } else {
      charCounter[letter]--;
    }
  }

  return true;
}
