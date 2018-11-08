// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fibsArr = [1];
  let a = 1;
  let b = 1;
  while (b <= num) {
    fibsArr.push(b);
    b = a + b;
    a = b - a;
  }
  return fibsArr.reduce((acc, next) => {
    return next % 2 > 0 ? acc + next : acc;
  });
}

function sumFibs(num) {
  // create an array to store all fibonacci numbers less or equal to num, with the first two fibonacci numbers.
  let fibsArr = [1, 1];
  while (fibsArr[0] + fibsArr[1] <= num) {
    // add new one at the beginning of the array for simplicity of last two numbers tracking
    fibsArr.unshift(fibsArr[0] + fibsArr[1]);
  }
  // reverse the array (in case the higher number is even) and sum all odd numbers
  return fibsArr.reverse().reduce((acc, next) => {
    return acc + next * (next % 2);
  });
}

function sumFibs(num) {
  // let fibsArr = [1];
  let sum = 0;
  let a = 0;
  let b = 1;
  while (b <= num) {
    if (b % 2 > 0) sum += b;
    b = a + b;
    a = b - a;
  }
  return sum;
}

sumFibs(4);
