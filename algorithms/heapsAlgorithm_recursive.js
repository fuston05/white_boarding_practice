// heaps algorithm (permutations)
// https://en.wikipedia.org/wiki/Heap%27s_algorithm

// runtime: O(n!)

// RECURSIVE VERSION
// const getPermutations = (arr) => {
//   const output = [];

//   const swapInPlace = (arrToSwap, indA, indB) => {
//     [arrToSwap[indA], arrToSwap[indB]] = [arrToSwap[indB], arrToSwap[indA]];
//   };

//   const generate = (n, heapArr) => {
//     if (n === 1) {
//       output.push(heapArr.slice());
//       return;
//     }

//     generate(n - 1, heapArr);

//     for (let i = 0; i < n - 1; i++) {
//       if (n % 2 === 0) {
//         swapInPlace(heapArr, i, n - 1);
//       } else {
//         swapInPlace(heapArr, 0, n - 1);
//       }
//       generate(n - 1, heapArr);
//     }
//   };

//   generate(arr.length, arr.slice());

//   return output;
// };

// ITERATIVE SOLUTION
const getPermutations = (arr) => {
  let result = [];
  let len = arr.length;
  const arrCopy = arr.slice();
  let C = new Array(len).fill(0);

  result.push(arrCopy);

  let i = 0;

  while (i < len) {

    if (C[i] < i) {
      // if even
      if (i % 2 === 0) {
        swap(arrCopy, 0, i);
      } else {
        // if odd
        swap(arrCopy, C[i], i);
      }

      result.push(arrCopy.slice());
      C[i] += 1;
      i = 0;

    } else { // if C[i] >= i
      C[i] = 0;
      i += 1;
    }
  }

  function swap(arrToSwap, indA, indB) {
    [arrToSwap[indB], arrToSwap[indA]] = [arrToSwap[indA], arrToSwap[indB]];
  }

  return result;
};

console.log("");
console.log(getPermutations([1, 2, 3, 4]));
console.log("");
