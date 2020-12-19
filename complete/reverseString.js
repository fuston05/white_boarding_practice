const reverseString = (str) => {
  // return str.split("").reverse().join("");

  // //////////////////////////////
  // no reverse method
  // incrementing for loop
  // let revStr = '';
  // for (let i = 0; i < str.length; i++){
  //   revStr = str[i] + revStr;
  // }
  // return revStr;

  // ////////////////////////////
  // decrementing for loop
  // let revStr = '';
  // for (let i = str.length-1; i >= 0; i--){
  //   revStr = revStr + str[i];
  // }
  // return revStr;

  // ////////////////////////////
  //  reduce
  // return str.split("").reduce((revStr, char) => {
  //   return char + revStr;
  // });

  // ///////////////////////////
  // for of loop
  let revStr = '';
  for (let char of str) {
    revStr = char + revStr;
  }
  return revStr;
};

// test cases
let str = "hello";

console.log(reverseString(str));
