// leet code challenge

// GREATEST COMMON DIVISOR OF STRINGS

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let outPut= '';
  
//     str1 must contain only letters found in str2 else: return ""
//     find largest subStr that can be found in both ????
  
  
/*
  list all unique letters found in str2, 
  str1 must have all those letters and ONLY those letters 
  
  .. loop over str2 find the largest substr
  then check that it divides into str1 evenly
  
  - or -
  use nested loops to iterate both checking for shrinking substr from str2 is common
*/
  
  return outPut;
};

// TEST CASES
str1 = "ABCABC", str2 = "ABC" //"ABC"
// str1 = "ABABAB", str2 = "ABAB" // "AB"
// str1 = "LEET", str2 = "CODE" // ""
// str1 = "ABCDEF", str2 = "ABC" // ""

console.log(gcdOfStrings(str1, str2));