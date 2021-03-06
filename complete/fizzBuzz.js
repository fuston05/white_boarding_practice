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
  let map = {
    3: 'Fizz',
    5: 'Buzz',
  }

  for (let i = 1; i <= n; i++) {
    // multiples of both 3 and 5:
    //   // if i % 5 === 0 && i % 3 === 0: 'FizzBuzz'
    // // min for both 3 and 5 == 3*5(15)
    // if (i % 15 === 0) {
    //   resultArray.push('FizzBuzz');

    //   // if i % 3 === 0: 'Fizz'
    // } else if (i % 3 === 0) {
    //   resultArray.push('Fizz');

    //   // if i % 5 === 0: 'Buzz'
    // } else if (i % 5 === 0) {
    //   resultArray.push('Buzz');

    // } else {
    //   resultArray.push(i.toString());
    // }

    //  ***********************************

    let str = "";
    // // future proof version

    // if (i % 3 === 0) {
    //   str += "Fizz";
    // }
    // if (i % 5 === 0) {
    //   str += "Buzz";
    // }
    // if (str.length === 0) {
    //   str += i;
    // }


    // ********************************

    // more scalability
    for (let key in map) {
      if (i % parseInt(key) === 0) {
        str += map[key];
      }
    }// end key loop

    if (str.length === 0) {
      str += i;
    }

    resultArray.push(str);
  } // end for

  return resultArray;
};

const num = 15;
// const num = 5;
// const num = 31;
// const num = 29;

console.log(fizzBuzz(num));
