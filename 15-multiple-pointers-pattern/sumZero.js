// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// Examples :
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

//easy solution, but big O notation =  O(n^2)
const sumZero = (numbersArray) => {
  for (let i = 0; i < numbersArray.length; i++) {
    for (let j = i + 1; j < numbersArray.length; j++) {
      if (numbersArray[i] + numbersArray[j] === 0)
        return [numbersArray[i], numbersArray[j]];
    }
  }

  return;
};

// console.log(sumZero([-2, 0, 1, 3]));

//refactor solution

//steps
// 1) set left  pointer to max left index

// 2) set right pointer to max right index

// 3) comapre to values

// 4) if === 0 return array

// 5) if a + b > 0 set rightr pointer -1

// 6) if a + b < 0 set left pointer + 1

const sumZero1 = (numbersArray) => {
  let leftPointer = 0;
  let rightPointer = numbersArray.length - 1;

  while (rightPointer > leftPointer) {
    let sum = numbersArray[leftPointer] + numbersArray[rightPointer];
    if (sum === 0) {
      return [numbersArray[leftPointer], numbersArray[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return;
};

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3, 10]));
