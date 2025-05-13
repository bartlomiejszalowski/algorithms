// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// Examples:
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const countUniqueValues = (values) => {
  let pointer = 0;

  for (let i = 1; i < values.length; i++) {
    if (values[pointer] !== values[i]) {
      pointer++;
      values[pointer] = values[i];
    }
  }

  return pointer + 1;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 33]));

function countUniqueValues(values) {
  let firstPointer;
  let secondPointer;
  let uniqueValues = [];

  if (values.length <= 0) return 0;

  for (let i = 0; i < values.length; i++) {
    firstPointer = i;
    secondPointer = i + 1;

    if (values[firstPointer] !== values[secondPointer])
      uniqueValues.push(values[firstPointer]);
  }

  return uniqueValues.length;
}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 33]));

const countUniqueValues1 = (values) => {
  //   const uniqueValues = [];

  //   for (let value of values) {
  //     if (!uniqueValues.includes(value)) {
  //       uniqueValues.push(value);
  //     }
  //   }

  //   return uniqueValues.length;

  const result = values.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);

  return result.length;
};

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
