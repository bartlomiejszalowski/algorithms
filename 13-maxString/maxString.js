// Define a function that takes an array of strings as an argument
// and returns the most commonly occurring string in the array.
// Examples
// maxString(["aba", "aa", "ad", "vcd", "aba"]) === "aba"
// maxString(["ccc", "ccc", "ccc", "ccc"]) === "ccc"

const maxString = (stringsArray) => {
  const maxStr = stringsArray.reduce((acc, str) => {
    acc[str] ? (acc[str] += 1) : (acc[str] = 1);
    return acc;
  }, {});

  return Object.entries(maxStr).reduce(
    (acc, value) => (value[1] > acc[1] ? value : acc),
    [null, 0]
  );
};

console.log(maxString(["aba", "aa", "ad", "vcd", "aba"]));
