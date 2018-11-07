// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  // join all passed arrays elements in a single array
  let uniteArr = [...arguments].reduce((acc, next) => {
    return acc.concat(next);
  });
  // remove duplitcate elements creating a new set from the array
  // return an array from the new set
  return Array.from(new Set(uniteArr));
}

// using concat instead of reduce
function uniteUnique(arr) {
  // join all passed arrays elements in a single array
  let uniteArr = [].concat(...arguments);
  // remove duplitcate elements creating a new set from the array
  // return an array from the new set
  return Array.from(new Set(uniteArr));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
