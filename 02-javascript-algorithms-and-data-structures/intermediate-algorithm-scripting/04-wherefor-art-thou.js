// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// .filter and for loop
function whatIsInAName(collection, source) {
  var arr = [];
  let sourceKeys = Object.keys(source);

  arr = collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        source[sourceKeys[i]] !== obj[sourceKeys[i]]
      )
        return false;
    }
    return true;
  });

  return arr;
}

// .filter and .every methods
function whatIsInAName(collection, source) {
  var arr = [];
  let sourceKeys = Object.keys(source);

  arr = collection.filter(function(obj) {
    return sourceKeys.every(key => obj[key] === source[key]);
  });

  return arr;
}

// .filter, .map and .reduce methods
function whatIsInAName(collection, source) {
  var arr = [];
  let sourceKeys = Object.keys(source);

  arr = collection.filter(function(obj) {
    return sourceKeys
      .map(key => source[key] === obj[key])
      .reduce((acc, next) => acc && next);
  });

  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);