const silnia = (n) => {
  let silnia = 1;

  for (let i = n; i > 0; i--) {
    silnia *= i;
  }

  return silnia;
};

console.log(silnia(0));
