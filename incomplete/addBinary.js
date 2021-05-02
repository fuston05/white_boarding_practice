// leet code challenge

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

var addBinary = function (a, b) {
  console.log("A: ", parseInt(a, 2));
  console.log("B: ", parseInt(b, 2));
  let sumInt = parseInt(a, 2) + parseInt(b, 2);
  console.log("sum: ", sumInt);
  console.log("");
  // let backToBinary = sumInt.toString(2);
  // console.log('back to binary: ', backToBinary)
  // console.log('length: ', backToBinary.length)
  // return backToBinary;

  let numPlace = 1;
  let aSum = 0;
  // iterate 'a' in reverse
  for (let i = a.length; i > 0; i--) {
    console.log(`A bin digit ${i}: `, a[i - 1]);
    console.log(`num in ${numPlace}'s place: ${a[i - 1]}`);
    let aCurVal = a[i - 1] * numPlace;
    aSum += aCurVal;
    numPlace *= 2;
    console.log("A curVal: ", aCurVal);
  }

  // reset 'numPlace' for next iteration
  numPlace = 1;
  console.log(`aSum: ${aSum}`);
  console.log("");

  let bSum = 0;
  // iterate  'b' in reverse
  for (let j = b.length; j > 0; j--) {
    console.log(`B bin digit ${j}: `, b[j - 1]);
    console.log(`num in ${numPlace}'s place: ${b[j - 1]}`);
    let bCurVal = b[j - 1] * numPlace;
    bSum += bCurVal;
    numPlace *= 2;
    console.log("bCurVal: ", bCurVal);
  }
  console.log(`bSum: ${bSum}`);

  return (aSum + bSum).toString(2);
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
a= "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output= "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
// Output= "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
console.log("");
console.log(addBinary(a, b));
console.log("");
console.log("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000".length)
