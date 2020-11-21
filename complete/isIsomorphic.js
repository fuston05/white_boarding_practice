// leetcode challenge "isomorphic strings"

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// 1st pass solution:
// var isIsomorphic = function (s, t) {
//   string1 = Array.from(s);
//   string2 = Array.from(t);
//   if (string1.length !== string2.length) {
//     return false;
//   }

//   let key = [];
//   for (let i = 0; i < 28; i++) {
//     key.push(Math.random() * i);
//   }

//   let map1 = {};
//   let map2 = {};
//   let pattern1 = [];
//   let pattern2 = [];
//   let keyOneCount = 0;
//   let keyTwoCount = 0;

//   //     map for string1
//   for (let i = 0; i < string1.length; i++) {
//     //      pattern1
//     if (!map1.hasOwnProperty(string1[i])) {
//       map1[string1[i]] = key[keyOneCount];
//       keyOneCount++;
//     }
//     pattern1.push(map1[string1[i]]);
//   }

//   //     map for string2
//   for (let j = 0; j < string2.length; j++) {
//     //      pattern2
//     if (!map2.hasOwnProperty(string2[j])) {
//       map2[string2[j]] = key[keyTwoCount];
//       keyTwoCount++;
//     }
//     pattern2.push(map2[string2[j]]);
//   }

//   for (let i = 0; i < pattern1.length; i++) {
//     if (pattern1[i] !== pattern2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// 2nd pass solution:
var isIsomorphic = function (s, t) {
  string1 = Array.from(s);
  string2 = Array.from(t);

  if (string1.length !== string2.length) {
    return false;
  }

  //  generate keys for mapping
  let key = [];
  //  '28' is the max str length used in tests
  for (let i = 0; i < 28; i++) {
    key.push(Math.random() * i);
  }

  let map1 = {};
  let map2 = {};
  let pattern1 = [];
  let pattern2 = [];
  let keyOneCount = 0;
  let keyTwoCount = 0;

  //  build maps
  for (let i = 0; i < string1.length; i++) {
    if (!map1.hasOwnProperty(string1[i]) && !map2.hasOwnProperty(string2[i])) {
      map1[string1[i]] = key[keyOneCount];
      map2[string2[i]] = key[keyTwoCount];
      keyOneCount++;
      keyTwoCount++;
    }
    //      build up patterns for comparison
    pattern1.push(map1[string1[i]]);
    pattern2.push(map2[string2[i]]);
  }
  //  check if patterns match
  if (JSON.stringify(pattern1) !== JSON.stringify(pattern2)) return false;

  return true;
};

// Example 1:
// s = "egg";
// t = "add";
// Output: true

// Example 2:
// s = "foo"
// t = "bar"
// Output: false

// Example 3:
s = "paper";
t = "title";
// Output: true
// Note:
// You may assume both s and t have the same length.

console.log(isIsomorphic(s, t));
