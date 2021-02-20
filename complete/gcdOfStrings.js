// leet code challenge

// GREATEST COMMON DIVISOR OF STRINGS

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let aLen = str1.length;
  let bLen = str2.length;

  // find the GCD of the 2 lengths
  let gcd = getGCD(aLen, bLen);

  let aSub = str1.slice(0, gcd);
  let bSub = str2.slice(0, gcd);

  if (
    str1 === bSub.repeat(str1.length / gcd) &&
    str2 === aSub.repeat(str2.length / gcd)
  ) {
    return aSub;
  }
  return '';
};

// helper function to get the GCD of strring lengths
const getGCD = (a, b) => {
  for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

// TEST CASES
// let str1 = "ABCABC"; 
// let str2 = "ABC"; //"ABC"

// let str1 = "ABABAB";
// let str2 = "ABAB"; // "AB"

// let str1 = "LEET"; 
// let str2 = "CODE" // ""

let str1 = "ABCDEF"; 
let str2 = "ABC" // ""

console.log(gcdOfStrings(str1, str2));
