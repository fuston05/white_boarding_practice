// leet code challenge

var strStr = function(haystack, needle) {
  let res= -1;
  
  if(haystack.includes(needle)){
      res= haystack.indexOf(needle);
  }
  
  return needle === '' ? 0 : res;
};

// haystack = 'hello';
// needle = 'll'; // 2

// haystack = 'aaaaa';
// needle = 'bba'; // -1

haystack = '';
needle = ''; // 0

console.log(strStr(haystack, needle));