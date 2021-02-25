// leetCode challenge (easy)
// reorderSpaces

/*
  You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.

Constraints:
1 <= text.length <= 100
text consists of lowercase English letters and ' '.
text contains at least one word.
*/

/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  //     we need to know how many spaces?
  let spacesSplit = text.split("").filter((ele) => {
    return ele === " ";
  });
  let wordsSplit = text.split(" ").filter((ele) => {
    return ele !== "";
  });

  let spaces = spacesSplit.length;
  let wordsLen = wordsSplit.length;

  let result = "";
  for (let i = 0; i < wordsLen; i++) {
    if (wordsSplit[i] !== " ") {
      result += wordsSplit[i];
      if (i < wordsSplit.length - 1) {
        let addSpaces = Math.floor(spaces / (wordsLen - 1));
        result += " ".repeat(addSpaces);
      }
    }
  }
  if (wordsLen === 1) {
    result += " ".repeat(spaces);
    return result;
  }
  if (spaces % (wordsLen - 1) !== 0) {
    result += " ".repeat(spaces % (wordsLen - 1));
  }
  return result;
};

// Example 1:
let text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

// Example 2:
// let text = " practice   makes   perfect"
// Output: "practice   makes   perfect "
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.

// Example 3:
// let text = "hello   world"
// Output: "hello   world"

// Example 4:
// let text = "  walks  udp package   into  bar a"
// Output: "walks  udp  package  into  bar  a "

// Example 5:
// let text = "a"
// Output: "a"


console.log(reorderSpaces(text))