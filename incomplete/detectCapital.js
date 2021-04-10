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
  // iterate through word
  for (let i = 0; i < word.length; i++) {
    console.log("word code: ", word[i], word[i].charCodeAt());
    // check each word charcode > 90(Z)
    if (word[i].charCodeAt() > 90) {
      console.log("> 90: ", word[i]);
      // if so, return false;
      return false;
    }
  }

  return true;
};

// Example 1:
let word = "USA";
// Output: True

// Example 2:
// let word= "FlaG"
// Output: False

// Example 3:
// let word= "f"

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

console.log(detectCapitalUse(word));
