const reverseString = (str) => {
  return str.split("").reverse().join("");

  // no reverse method
  // incrementing for loop
  let revStr = '';
  for (let i = 0; i < str.length; i++){
    revStr = str[i] + revStr;
  }
  return revStr;
};

// test cases
let str = "hello";

console.log(reverseString(str));
