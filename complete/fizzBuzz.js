// leet code challenge

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

var fizzBuzz = function (n) {
  resultArray = [];

  for (let i = 1; i <= n; i++){
    // multiples of both 3 and 5:
      // if i % 5 === 0 && i % 3 === 0: 'FizzBuzz'
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push('FizzBuzz');

      // if i % 3 === 0: 'Fizz'
    } else if (i % 3 === 0) {
      resultArray.push('Fizz');
      
      // if i % 5 === 0: 'Buzz'
    } else if (i % 5 === 0) {
      resultArray.push('Buzz');
      
    } else {
      resultArray.push(String(i));
    }
  }//end for
    
  return resultArray;
};



const num = 15;
// const num = 5;
// const num = 31;
// const num = 29;

console.log(fizzBuzz(num));