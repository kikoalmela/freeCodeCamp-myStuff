// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let newArr = [];

  pushUniqueElements(arr1, arr2);
  pushUniqueElements(arr2, arr1);

  function pushUniqueElements(sourceArr, searchedArr) {
    sourceArr.forEach(element => {
      if (!searchedArr.includes(element)) newArr.push(element);
    });
  }

  return newArr;
}

// Another solution using reduce
function diffArray(arr1, arr2) {
  let allElements = [...arr1].concat(arr2);
  let copy = [...allElements];
  let duplicated = [];

  let newArr = allElements.reduce(function(acc, cur, idx, arr) {
    copy.shift();
    if (!copy.includes(cur) && !duplicated.includes(cur)) {
      acc.push(cur);
      return acc;
    } else duplicated.push(cur);
    return acc;
  }, []);

  return newArr;
}

// Another one
function diffArray(arr1, arr2) {
  let newArr = [];
  let uniqueArr2 = Array.from(new Set(arr2));

  arr1.forEach(element => {
    let idx = uniqueArr2.indexOf(element);
    if (idx >= 0) {
      uniqueArr2.splice(idx, 1);
    } else newArr.push(element);
  });

  let diffArray = newArr.concat(uniqueArr2);

  return diffArray;
}

// Solution with filter
function diffArray(arr1, arr2) {
  let arrA = uniqueElements(arr1, arr2);
  let arrA = uniqueElements(arr2, arr1);

  function uniqueElements(sourceArr, seekedArr) {
    return sourceArr.filter(el => !seekedArr.includes(el));
  }

  return arrA.concat(arrB);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
