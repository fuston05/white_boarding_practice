const isPalindrome = (str) => {
  // first pass
  // return str === str.split("").reverse().join("");

  let revStr = "";
  for (let char of str) {
    revStr = char + revStr;
  }
  return revStr === str;
};

// test cases
str = "racecar";
// str = "hello";

console.log(isPalindrome(str));
