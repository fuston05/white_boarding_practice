
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}


// test cases
str = 'racecar';
// str = 'hello';


console.log(isPalindrome(str));