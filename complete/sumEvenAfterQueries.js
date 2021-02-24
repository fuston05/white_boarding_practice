// leet code challenge (easy)
// sumEvenAfterQueries
/*
  We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query. 
*/

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let ind = queries[i][1];
    let val = queries[i][0];
    let total = 0;
    A[ind] += val;

    for (let j = 0; j < A.length; j++) {
      if (A[j] % 2 === 0) {
        total += A[j];
      }
    }
    result.push(total);
  }
  return result;
};

// Example 1:
let A = [1, 2, 3, 4];
let queries = [
  [1, 0],
  [-3, 1],
  [-4, 0],
  [2, 3],
];
// Output: [8,6,2,4]
// Explanation:
// At the beginning, the array is [1,2,3,4].
// After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
// After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
// After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
// After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

console.log(sumEvenAfterQueries(A, queries));
