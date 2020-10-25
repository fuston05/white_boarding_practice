// leetCode challenge

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:
// s= "Hello World"
// Output: 5

// Example:
s= ""
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
  let arr = s.split(' ');
  // remove empty's
  let count = 0;
  while(count < arr.length){

    if (arr[count].length < 1) {
      arr.splice(count, 1);
    } else {
      count++;
    }
  }

  return arr.slice(-1).toString().length;
};

console.log(lengthOfLastWord(s));