// leet code challenge

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.


var addBinary = function (a, b) {
  console.log('a len: ', a.length);
  console.log('b len: ', b.length);

  let num1 = parseInt(a, 2);
  let num2 = parseInt(b, 2);

  if (num1.length > num2.length) {
    let dif = num1.length - num2.length;
    // b= `${dif * 0}${b}`;
    num2 = parseInt(`${dif * 0}${num2}`, 10);
    
  } else if (num2.length > num1.length) {
    let dif = num2.length - num1.length;
    // a = `${dif * 0}${a}`
    num1= parseInt(`${dif * 0}${num1}`, 10);
  }

  console.log('num1: ', num1);
  console.log('num2: ', num2);

  let res = num1 + num2;
  return res.toString(2)

  }


//    4, 3, 2, 1
// Example 1:
a = "11", b = "1"
// Output: "100"

// Example 2:
// a = "1010", b = "1011"
// Output: "10101"

// Example 3:
// a= "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output= "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"




console.log(addBinary(a, b));