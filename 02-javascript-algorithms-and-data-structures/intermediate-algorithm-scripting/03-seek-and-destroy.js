// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let args = [...arguments];
  // Remove all the values
  return arr.filter(el => !args.includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
