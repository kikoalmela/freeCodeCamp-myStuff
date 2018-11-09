// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself.
// For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  let sum = 0;

  // function that check if a given number is prime
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 0 && x !== 1;
  }

  for (let i = 0; i <= num; i++) {
    // check with the function numbers from 2 till num
    if (isPrime(i)) {
      // if true, add number to sum
      sum += i;
    }
  }

  return sum;
}

sumPrimes(10);

// function iPrime optimized from O(n) to O(sqrt(n))
const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num !== 1 && num !== 0;
};

// Sieve implementation of prime check
function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
