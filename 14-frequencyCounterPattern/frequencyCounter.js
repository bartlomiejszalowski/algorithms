// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Examples:
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false

// EASY SOLUTION
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));

// REFACTORED

const refactoredSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let number of arr1) {
    if (frequencyCounter1[number]) {
      frequencyCounter1[number] += 1;
    } else {
      frequencyCounter1[number] = 1;
    }
  }

  for (let number of arr2) {
    if (frequencyCounter2[number]) {
      frequencyCounter2[number] += 1;
    } else {
      frequencyCounter2[number] = 1;
    }
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(refactoredSame([1, 2, 3, 2], [4, 1, 9, 4]));
