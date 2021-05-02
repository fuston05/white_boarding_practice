// leet code challenge

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.


var addBinary = function (a, b) {
  console.log('A: ', parseInt(a, 2))
  console.log('B: ', parseInt(b, 2))
  let sumInt = parseInt(a, 2) + parseInt(b, 2)
  console.log('sum: ', sumInt)
  console.log('');
  let backToBinary = sumInt.toString(2);
  console.log('back to binary: ', backToBinary)
  console.log('length: ', backToBinary.length)
  return backToBinary;
}


// Example 1:
// a = "11", b = "1"
// Output: "100"

// Example 2:
a = "1010", b = "1011"
// Output: "10101"

// Example 3:
a= "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output= "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
// Output= "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"



console.log(addBinary(a, b));