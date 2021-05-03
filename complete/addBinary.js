// leet code challenge

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

var addBinary = function (a, b) {
  let binA = `0b${a}`;
  let binB = `0b${b}`;
  console.log('binA: ', binA);
  console.log('binB: ', binB);

  let sum = BigInt(binA) + BigInt(binB)
  console.log('sum: ', sum)
  return sum.toString(2)
};

// Example 1:
// let a = "11"
// let b = "1"
// Output: "100"

// Example 2:
// let a = "1010"
// let b = "1011";
// (8+2= 10)+(8+2+1=11) = 21
// Output: "10101"

// Example 3:
a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output= "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
// Output= "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
console.log("");
console.log(addBinary(a, b));
console.log("");
