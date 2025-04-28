// -- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInit = (n) => {
  const string = n.toString().split("").reverse();
  let fixedArr = [];

  for (char of string) {
    if (char === "-") {
      fixedArr = [char, ...fixedArr];
    } else {
      fixedArr = [...fixedArr, char];
    }
  }

  return parseInt(fixedArr.join(""));
};

// console.log(reverseInit(-9123));

const reverseInit2 = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};

console.log(reverseInit(-921312));

// Math.sign() to wbudowana funkcja w JavaScript, która zwraca znak liczby, którą jej przekażesz. Zwraca ona jeden z następujących wyników w zależności od wartości liczby:

// 1 — jeśli liczba jest dodatnia.

// -1 — jeśli liczba jest ujemna.

// 0 — jeśli liczba jest równa zero.

// -0 — jeśli liczba jest ujemnym zerem (-0), chociaż to rzadko spotykana sytuacja.
