// Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 💡
// Metoda slice() w JavaScript jest używana do wycinania fragmentu tablicy
// (lub łańcucha znaków) bez zmieniania oryginalnego obiektu.
// Zwraca nowy obiekt zawierający elementy wycięte z tablicy lub łańcucha znaków.
// start (opcjonalny) – indeks, od którego zaczyna się cięcie (włącznie). Jeśli nie podasz tej wartości, cięcie zacznie się od indeksu 0.
// end (opcjonalny) – indeks, w którym kończy się cięcie (wyłączając ten indeks).
// Jeśli nie podasz tej wartości, cięcie będzie kontynuowane do końca tablicy lub łańcucha.

const chunk = (array, size) => {
  const result = [];
  let startIndex = 0;

  while (startIndex < array.length) {
    result.push(array.slice(startIndex, startIndex + size));
    startIndex += size;
  }

  return result;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
