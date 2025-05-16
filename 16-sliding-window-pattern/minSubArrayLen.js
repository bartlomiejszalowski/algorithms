// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
//  If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

//DANE WEJSCIOWE (ARRAY, SUM)

// tworzymy 4 zmienne: start, end, toalSum, minLen.

// tworzymy petle while do momentu kiedy start < od dlugosci tablicy czyli => start < array.length

// tworzymy pierwszy warunek sparwdzajacy czy totalSum jest mniejsze niz sum => totalSum < sum

// jesli tak jest to zwiekszamy zakres okna => end++

// tworzymy drugi warunek sprawdzajcy czy totalSum jest wieksze badz rowne sum

// jesli tak jest to zmniejszamy zakres okna => start++ oraz ustawiamy min length czyli odejmujemy od end start

// total sum mniejsze niz required ale dotralismy do konca wiec przerywamy aby nie pozostac w Infinite Loop

function minSubArrayLen(array, sum) {
  // tworzymy 4 zmienne: start, end, toalSum, minLen.
  let start = 0;
  let end = 0;
  let totalSum = 0;
  let minLen = Infinity;

  // tworzymy petle while do momentu kiedy start < od dlugosci tablicy czyli => start < array.length
  while (start < array.length) {
    // tworzymy pierwszy warunek sparwdzajacy czy totalSum jest mniejsze niz sum => totalSum < sum
    if (totalSum < sum && end < array.length) {
      totalSum += array[end];
      // jesli tak jest to zwiekszamy zakres okna => end++
      end++;
      // tworzymy drugi warunek sprawdzajcy czy totalSum jest wieksze badz rowne sum
    } else if (totalSum >= sum) {
      //ustwaiamy nowe minLen
      minLen = Math.min(minLen, end - start);
      totalSum -= array[start];
      // jesli tak jest to zmniejszamy zakres okna => start++ oraz ustawiamy min length czyli odejmujemy od end start
      start++;
      // total sum mniejsze niz required ale dotralismy do konca wiec przerywamy aby nie pozostac w Infinite Loop
      //To się dzieje TYLKO wtedy, gdy:

      // totalSum < sum (czyli chcielibyśmy powiększyć okno)
      // ALE

      // end >= array.length (czyli nie możemy już przesunąć end, bo jesteśmy na końcu tablicy)

      // W skrócie: okno jest za małe, ale nie możemy go już rozszerzyć, bo skończyła się tablica.
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
