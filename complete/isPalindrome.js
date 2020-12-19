const isPalindrome = (str) => {
  // first pass
  // return str === str.split("").reverse().join("");

  //////////////////////////////////
  // using for of loop
  // let revStr = "";
  // for (let char of str) {
  //   revStr = char + revStr;
  // }
  // return revStr === str;

  // ///////////////////////////////
  // using reduce
  const reversed = str.split('').reduce((revStr, char) => char + revStr);
  return reversed === str;
};

// test cases
// let str = "racecar";
// let str = 'madam';
// let str = "hello";

console.log(isPalindrome(str));
