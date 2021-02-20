// leet code challenge

// GREATEST COMMON DIVISOR OF STRINGS

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let outPut= '';
  
//     str1 must contain only letters found in str2 else: return ""
//     find largest subStr that can be found in both ????
  
  
/*
  list all unique letters found in str2, 
  str1 must have all those letters and ONLY those letters 
  
  .. loop over str2 find the largest substr
  then check that it divides into str1 evenly
  
  - or -
  EX STR2: 'AABC AABC'

  letters= [str2[0]] // ['A', 'B', 'C']
  shortestSub= []

  BUILD LETTERS
  loop over str2:
    if !letters.contains(str2[i])
      letters.push(str2[i])

  FIND SHORTEST SUBSTR OF STR2:
    letterCount= 1
    temp= [str2[0]]
    loop over str2:
      if letterCount < letters.length:
        if temp[temp.length -1] !== str2[i] : letterCount++
        temp.push(str2[i])
      else:
        shortestSub.push(temp)

  CHECK STR1 AGAINST shortestSub
    loop over str1:
      if !shortestSub[i] === str1[i]
        return "" // we're done
      else:
        


    either aabc or aabc*2, aabc*3 etc... 



  at the end push temp onto table, slice it out of str2 



  use nested loops to iterate both checking for shrinking substr from str2 is common
    starting with the whole str2 (largest possible substr) as curSubStr
    check str1 contains curSubstr:
      if so: slice it out of str1: repeat if letters remain in str1 
      else: shorten curSubStr (if it has repeatable substr pattern)
    
    if we can slice out the substr until str1 is empty then it EVENLY divides out str1
    return current substr if not shorten the substr and repeat

    str2 could be: 
      'A'
      'AAB'
      ''

*/
  
  return result.join('');
};

// TEST CASES
str1 = "ABCABC", str2 = "ABC" //"ABC"
// str1 = "ABABAB", str2 = "ABAB" // "AB"
// str1 = "LEET", str2 = "CODE" // ""
// str1 = "ABCDEF", str2 = "ABC" // ""

console.log(gcdOfStrings(str1, str2));