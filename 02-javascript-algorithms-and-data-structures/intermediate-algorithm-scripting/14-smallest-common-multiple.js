// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  // Sort the array numbers
  let sortedArr = [...arr].sort((a, b) => a - b);
  // Create a range from smaller to greater
  let range = [];
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    range.push(i);
  }

  let smallestCommonMultiple;

  // Starting from greater, loops through its multiples until we find smallestCommonMultiple
  let i = sortedArr[1];
  while (!smallestCommonMultiple) {
    // if current number is multiple of every range number, define smallestCommonMultiple
    if (range.every(num => i % num === 0)) {
      smallestCommonMultiple = i;
    }
    // else define next greater multiple
    i += sortedArr[1];
  }
  return smallestCommonMultiple;
}

smallestCommons([1, 5]);
