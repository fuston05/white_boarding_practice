// Sieve of Eratosthenes Aglorithm (finding all prime nums)
// Wiki link: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

/**
  1- Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).

  2- Initially, let p equal 2, the smallest prime number.

  3- Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).

  4- Find the smallest number in the list greater than p that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.

  5- When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.
 */

// const getAllPrimes = (n) => {
//   // generate initial array with ALL nums from 2 - n
//   const arr = [];
//   for (let i = 2; i <= n; i++) arr.push(i);

//   let p = 3;
//   console.log('p: ', p)
//   const result = [p];
//   let nonPrimes = [];

//   // mark all nums from 2*p - n as non-primes in increments of p
//   for (let j = 2*p; j <= n; j+=p){
//     console.log('J: ', j)
//   }

//   console.log('arr: ', arr)
// }





// test case #1:
// let n = 5;
// output: [2, 3, 5]

// test case #2:
// let n = 20;
// output: [2, 3, 5, 7, 11, 13, 17, 19]

// test case #3:
// let n = 50;
// output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


// console.log('');
// console.log(getAllPrimes(n));
// console.log('');          

