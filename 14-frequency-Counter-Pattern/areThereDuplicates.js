// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
//  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
  let uniqueValues = {};

  for (let value of args) {
    if (!uniqueValues[value]) {
      uniqueValues[value] = 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 1, 2));
