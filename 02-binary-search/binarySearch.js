const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // znalezlismy
    }

    if (array[mid] < target) {
      left = mid + 1; // szukamy w prawej połowie
    } else {
      right = mid - 1; // szukamy w lewej połowie
    }

    console.log(array[mid]);
  }

  return -1; // nie ma
};

console.log(binarySearch([1, 3, 5, 7, 9], -1));
