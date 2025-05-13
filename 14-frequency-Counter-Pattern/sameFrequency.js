// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  const frequencyCounter = {};

  for (let char of num1.toString()) {
    if (frequencyCounter[char]) {
      frequencyCounter[char] += 1;
    } else {
      frequencyCounter[char] = 1;
    }
  }

  for (let char of num2.toString()) {
    if (!frequencyCounter[char]) {
      return false;
    }

    frequencyCounter[char] -= 1;
  }

  return true;
}

console.log(sameFrequency(34, 14));

//tworzymu obiekt do przechowywania liczby znakow

// przechodzimy przez 1 string i dodajemy do niego znaki wraz z ich liczba

//przechodzimy przez 2 string i sprawdzamy czy istnieje jego wartosc w frequencyCounterObiekcie i czy wartosci sa rowne
