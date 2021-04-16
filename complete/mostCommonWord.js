// leetcode challenge (easy)
// most common word

// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // convert paragraph to all lowercase?? 'banned' will always be lowercase
  let p = paragraph.toLowerCase();
  let dict = {};
  console.log("starting P: ", p);

  // remove all puctuation and numbers?
  // iterate and
  // re.test(strign) ?
  let re = /[0-9!?',;.]/g;
  p = p.replace(re, " ");
  console.log('after regex: ', p)
  // split paragraph into an array?
  // STRING.split()
  p = p.split(" ");

  // iterate... O(n)
  //  if word is 'banned' skip, else if not in dict, add to dict? else increment it's count in dict
  // build a dictionary?
  // {
  // bob: 1,
  // hit : 3,
  // ball: 2...
  // }
  for (word of p) {
    if (word in dict && word.length) {
      dict[word]++;
    } else {
      if (!banned.includes(word) && word.length) {
        dict[word] = 1;
      }
    }
  }
  console.log('dict: ', dict)
  // which word occurred more?
  let maxSoFar = 0;
  p.forEach((word) => {
    if (dict[word] > maxSoFar) {
      maxSoFar = dict[word];
    }
  });

  let result;
  p.forEach((word) => {
    if (dict[word] === maxSoFar) {
      result = word;
      return;
    }
  });

  console.log("ending P: ", p);
  console.log("max: ", maxSoFar);
  return result;
};

// Example 1:
// let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// let banned = ["hit"];
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// let paragraph = "a."
// let banned = []
// Output: "a"

// example 3:
let paragraph = "a, a, a, a, b,b,b,c, c";
let banned = ["a"];
// Output: "b"

// // Constraints:
// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

console.log(mostCommonWord(paragraph, banned));
