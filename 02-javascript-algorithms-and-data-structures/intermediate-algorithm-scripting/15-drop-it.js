// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  // Create a copy of arr
  let resultArr = [...arr];
  // loop through array elements
  for (let i = 0; i <= arr.length; i++) {
    // If current element doesn't satisfy the function, shift it from resultArr.
    if (!func(arr[i])) {
      resultArr.shift();
      // when first element satisfy the function, return the resultArr.
    } else {
      return resultArr;
    }
  }
  // If any element satisfy the function, resultArr ends empty. Return it.
  return resultArr;
}

function dropElements(arr, func) {
  // Find element index that satisfy the function passed as argument
  let index = arr.findIndex(func);
  // If there is no found element, return empty array, else return the partial array from index.
  return index < 0 ? [] : arr.slice(index);
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
