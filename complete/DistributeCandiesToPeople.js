// leetcode challenge (easy)
// Distribute Candies to People

// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  // track candies left

  // track running total for each 'person'
  // while loop???
  // while candies > 0??
  // decrement candies that are added to each person as we go
  // increment totals for each person as we give them candies
  // [
  //     [0, 1], ... person 0 has 1 candy
  //     [1, 2],  ... person 1 has 2 candy
  //     [2, 3],  ... person 2 has 3 candy
  // ]

  let remainingCandies = candies;
  let count = 1;
  let people_candy = [];
  let i = 0;

  while (remainingCandies > 0 || people_candy.length < num_people) {
    let candiesToGive = remainingCandies >= count ? count : remainingCandies;

    // if we're on the 1st iteration over all people create, the initial amounts in the array
    if (count <= num_people) {
      // what if we're out of candy, but havent visited all the people yet??
      if (remainingCandies <= 0) {
        candiesToGive = 0;
      }
      people_candy.push(candiesToGive);
    } else { // if we've made a complete 1st pass of all people 
      // then increment amounts in the future iterations
      people_candy[i] += candiesToGive;
    }
    
    // decrement candies 
    remainingCandies -= candiesToGive;

    // handle the i rollover
    if (i < num_people - 1) {
      i++;
    } else {
      i = 0;
    }

    count++;
  }
  return people_candy;
};

// Example 1:
// let candies = 7;
// let num_people = 4;
// Output: [1,2,3,1]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3,0].
// On the fourth turn, ans[3] += 1(because there is only one candy left), and the final array is[1, 2, 3, 1].

// Example 2:
// let candies = 10;
// let num_people = 3;
// Output: [5,2,3]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3].
// On the fourth turn, ans[0] += 4, and the final array is [5,2,3].

// Example 3:
let candies = 600;
let num_people = 40;
// Output: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,5,0,0,0,0,0]

// Constraints:
// 1 <= candies <= 10^9
// 1 <= num_people <= 1000

console.log(distributeCandies(candies, num_people));
