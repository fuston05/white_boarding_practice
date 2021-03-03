// leet code challenge (easy)
// day of year

/*
  Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

  Constraints:
  date.length == 10
  date[4] == date[7] == '-', and all other date[i]'s are digits
  date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
*/

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let start = new Date(`${new Date(date).getFullYear()}-01-01`);

  return (new Date(date) - start) / (1000 * 60 * 60 * 24) + 1;
};

// Example 1:
let date = "2019-01-09";
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:
// let date = "2019-02-10"
// Output: 41

// Example 3:
// let date = "2003-03-01"
// Output: 60

// Example 4:
// let date = "2004-03-01"
// Output: 61

console.log(dayOfYear(date));
