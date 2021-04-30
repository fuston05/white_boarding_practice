// This is where I tinker with different ideas and things
// ******************************************************
let arr = [];
let target = Math.floor(Math.random() * 100 + 1);

for (let i = 0; i < 100; i++) {
  let num = Math.floor(Math.random() * 100 + 1);
  arr.push(num);
}

console.log("\n Original arr:\n", "     ", arr, "\n");

const findNum = (arr, target) => {
  arr.sort((a,b) => a-b)
  console.log("\n sorted arr:\n", "     ", arr, "\n");

  let start = 0;
  let end = arr.length;
  let result = "Not Found";
  
  while (end > start) {
    console.log("target: ", target);
    let guess = Math.floor((end - start)/2);
    console.log("guess: ", guess);

    console.log("start: ", start, "\nend: ", end);

    if (arr[guess] === target) {
      console.log('found: ', arr[guess]);
      result = arr[guess];
      return result;
    }

    if (arr[guess] < target) {
      start = guess;
      console.log('guess too small\n');
    }else if (arr[guess] > target) {
      end = guess;
      console.log('guess too big\n');
    }
  }
  return result;
};

console.log("findNum: ", findNum(arr, target));
