// -- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
//   maxChar("abcccccccd") === "c"
//   maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const maxCharObj = {};
  let maxValue = 0;
  let maxChar = "";

  //  FIRST OPTION
  //   for (let char of str) {
  //     if (maxCharObj[char]) {
  //       maxCharObj[char] += 1;
  //     } else {
  //       maxCharObj[char] = 1;
  //     }
  //   }

  // SECOND OPTION
  for (let char of str) {
    maxCharObj[char] = maxCharObj[char] + 1 || 1;
  }

  //   FIRST OPTION
  //   for (const [key, value] of Object.entries(maxCharObj)) {
  //     if (value > maxValue) {
  //       maxValue = value;
  //       maxChar = key;
  //     }
  //   }

  // SECOND OPTION
  for (const key in maxCharObj) {
    if (maxCharObj[key] > maxValue) {
      maxValue = maxCharObj[key];
      maxChar = key;
    }
  }

  return { maxChar, maxValue };
};

console.log(maxChar("apple 1231111"));
