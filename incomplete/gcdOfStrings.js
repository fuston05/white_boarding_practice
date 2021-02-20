// leet code challenge

// GREATEST COMMON DIVISOR OF STRINGS

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let result = "";
  // all possible 'unique' letters in str2
  let letters = [str2[0]];
  let shortestSubStr = "";
  let curLongestSubStr = str2;

  // buile letters arr from str2
  for (let i = 1; i < str2.length; i++) {
    if (!letters.includes(str2[i])) {
      letters.push(str2[i]);
    }
  }
  console.log("letters: ", letters);

  // find shortest possible substr in str2
  let temp = "";
  let letterCount = 0;

  for (let i = 0; letterCount < letters.length; i++) {
    console.log("temp: ", temp);
    if (!temp.includes(str2[i])) {
      letterCount++;
    }
    temp += str2[i];
  }
  shortestSubStr = temp;
  console.log("temp: ", temp);





};





// TEST CASES
// str1 = "ABCABC", str2 = "ABC" //"ABC"
(str1 = "ABABAB"), (str2 = "ABAB"); // "AB"
// str1 = "LEET", str2 = "CODE" // ""
// str1 = "ABCDEF", str2 = "ABC" // ""

console.log(gcdOfStrings(str1, str2));
