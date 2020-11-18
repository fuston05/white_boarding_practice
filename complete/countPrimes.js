// leetcode challenge "countPrimes"

// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function (n) {
  let primeCount = 0;
  let primes = [];

  //  build our array, all unmarked, assumed 'prime'
  for (let i = 0; i < n; i++) {
    primes.push(true);
  }

  // eliminate all multiples of each
  for (let i = 2; i * i < n; i++) {
    //      if 'unmarked'
    if (primes[i] === true) {
      //          eliminate all of I's multiples
      for (let j = 2; i * j < n; j++) {
        primes[i * j] = false;
      }
    }
  }

  //  count all primes that are left
  for (let i = 2; i < n; i++) {
    primes[i] === true ? primeCount++ : null;
  }

  return primeCount;
};

// Example 1:
// n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// n = 0
// Output: 0

// Example 3:
n = 1
// Output: 0

console.log(countPrimes(n));
