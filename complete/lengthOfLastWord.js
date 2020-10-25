// leetCode challenge

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:
s= "Hello World"
// Output: 5

// Example:
// s= "Hello my name is poop"
// Output: 4

// Example:
// s= "a "
// Output: 1

// Example:
// s= "b   a    "
// Output: 1

var lengthOfLastWord = function (s) {
  console.log('s length: ', s.length);
  if (!s.length) { return 0 }

  let arr = s.split(' ');
  console.log('arr: ', arr);
  console.log('arr length: ', arr.length);
  // remove empty's
  let count = 0;
  while(count < arr.length){

    if (arr[count].length < 1) {
      console.log('removing ', arr[count]);
      arr.splice(count, 1);
    } else {
      count++;
    }
  }
  console.log('after splice: ', arr);

  let lastWord = arr.slice(-1).toString();
  console.log('lastWord: ', lastWord);

  let wordLength = lastWord.length;
  console.log('wordLength ', wordLength);

  return wordLength;
};

console.log(lengthOfLastWord(s));