// leet code challenge (easy)
// Detect Capital

// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  word = word.split("");
  console.log("word: ", word);
  // numCaps= 0;
  let numCaps = 0;

  // iterate to check is CAP?
  // track num of caps
  for (letter of word) {
    if (letter.charCodeAt() < 91) {
      numCaps++;
    }
  }

  console.log('numCaps: ', numCaps)
  // if all caps, no caps, or only the 1st letter is caps
  if (numCaps === word.length ||
    numCaps === 0 ||
    (numCaps === 1 && word[0].charCodeAt() < 91)) {
    return true;
  }
  return false;
};

// Example 1:
// let word = "USA";
// Output: True

// Example 2:
// let word= "FlaG"
// Output: False

// Example 3:
let word = "f"
// output: true

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

console.log(detectCapitalUse(word));
