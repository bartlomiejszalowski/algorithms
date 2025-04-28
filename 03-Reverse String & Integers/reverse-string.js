// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1 solutuion
const reverse = (str) => {
  let reversed = "";

  for (char of str) {
    reversed = char + reversed;
  }

  return reversed;
};

reverse("apple");

// 2 solution
const reverse2 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse2("apple"));
