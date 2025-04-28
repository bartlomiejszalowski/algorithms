// 📌 Zadanie:
// ✔️ Napisz funkcję findFirstAndLast(arr, target), która znajdzie:

// Pierwszy indeks wystąpienia target
// Ostatni indeks wystąpienia target
// ✔️ Jeśli liczby nie ma w tablicy, zwróć [-1, -1].
// ✔️ Oblicz złożoność czasową Twojej funkcji.

const findFirstAndLast = (array, target) => {
  const firstIndex = findFirst(array, target);
  const lastIndex = findLast(array, target);
  return [firstIndex, lastIndex];
};

const findFirst = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let first = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return first;
};

const findLast = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return last;
};

console.log(findFirstAndLast([1, 2, 2, 2, 3, 4, 5, 5, 5], 5));
