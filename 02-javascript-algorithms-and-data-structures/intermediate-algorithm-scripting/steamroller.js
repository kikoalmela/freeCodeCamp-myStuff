// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(steamrollArray(curr));
    } else {
      acc.push(curr);
      return acc;
    }
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
