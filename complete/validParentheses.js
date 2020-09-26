// leetCode challenge

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const table = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  // track current opener
  const stack = [];

  // loop over s
  for (let i = 0; i < s.length; i++) {

    let cur = s[i];

    if(stack.length === 0 && !table[cur] ){
      return false;
    }

    // if cur in table:
    if (table[cur]) {
      // its an opener
      // push to stack
      stack.push(cur);

      // not in table
    } else {
      // its a closer ] === [ (from table key)
      // does cur close the cur opener?
      if (cur === table[stack.slice(-1)]) {
        // if so, pop stack, move to next s
        stack.pop();
      }else{
        return false;
      }
    }
  }
  return !stack.length > 0;
};



// Example 1:
// const s = "()";
// Output: true

// Example 2:
// const s = "()[]{}"
// Output: true

// Example 3:
// const s = "(]"
// Output: false

// Example 4:
// const s = "([)]"
// Output: false

// Example 5:
// const s = "{[]}"
// Output: true

// Example 6:
// const s = "]"
// Output: false

// Example 7:
const s = "(])"
// Output: false

console.log(isValid(s));