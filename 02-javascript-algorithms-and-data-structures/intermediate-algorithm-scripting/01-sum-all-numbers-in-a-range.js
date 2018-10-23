/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let fullRange = [];

  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    fullRange.push(i);
  }

  return fullRange.reduce((acc, next) => acc + next);
}

sumAll([1, 4]);
