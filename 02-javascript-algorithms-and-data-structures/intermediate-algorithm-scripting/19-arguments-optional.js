// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Using typeof() to check numbers
function addTogether() {
  let args = [...arguments];
  if (args.some(el => typeof el !== 'number')) return undefined;
  if (args.length === 2) return args[0] + args[1];
  return function(num) {
    if (typeof num !== 'number') return undefined;
    return args[0] + num;
  };
}

// Using Number.isFinite() to check numbers.
// Global isFinite() doesn't work because of it coerce string to number before checking.
function addTogether() {
  let args = [...arguments];
  if (args.some(el => !Number.isFinite(el))) return undefined;
  if (args.length === 2) return args[0] + args[1];
  return function(num) {
    if (!Number.isFinite(num)) return undefined;
    return args[0] + num;
  };
}

// Refactored to tertiary operator
// Use of reduce() method
function addTogether() {
  let args = [...arguments];
  return args.some(el => !Number.isFinite(el))
    ? undefined
    : args.length === 2
    ? args.reduce((acc, next) => acc + next)
    : num => (!Number.isFinite(num) ? undefined : args[0] + num);
}

addTogether(2, 3);
