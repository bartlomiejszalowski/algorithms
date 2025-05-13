function isPrime(n) {
  if (n <= 1) return false;

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
