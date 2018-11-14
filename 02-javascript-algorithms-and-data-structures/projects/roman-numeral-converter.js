// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  // Object with Roman characters equivalence:
  const ROMAN_NUMERALS = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  // Convert num to array of numbers
  let numArr = num
    .toString()
    .split('')
    // Reverse order, so we have units at index 0, tens at index 1 and so on.
    .reverse();

  // loop through digits of numArr.
  return numArr
    .map((digit, idx) => {
      // Convert digit to roman pattern in decimal numbers.
      // idx define the place(units, tens, ...) argument for digitToRomanInArabicNumerals function.
      return digitToRomanInArabicNumerals(digit, idx)
        .map(decNum => ROMAN_NUMERALS[decNum]) // Convert each converted number to its roman equivalent
        .join(''); // Concatenate roman numbers in a string
    })
    .reverse()
    .join(''); // Concatenate into a string and return the result.

  // Function to convert a digit to roman pattern in decimal numbers.
  // Second argument define if digit is at units place (0), tens (1), hundreds(2), thousands(3) and so on.
  function digitToRomanInArabicNumerals(n, place) {
    let pattern = [];
    let shifter = Math.pow(10, place);

    if (place > 2) {
      for (let i = 0; i < n * Math.pow(10, place - 3); i++) {
        pattern.push(1000);
      }
    } else if (n === 0) {
      return pattern;
    } else {
      for (let i = 1; i <= n; i++) {
        if (i < 4) pattern.push(1 * shifter);
        else if (i === 4) {
          pattern.splice(0, 2);
          pattern.push(5 * shifter);
        } else if (i === 5) pattern.shift();
        else if (i < 9) pattern.push(1 * shifter);
        else {
          pattern.splice(0, 3);
          pattern.push(10 * shifter);
        }
      }
    }
    return pattern;
  }
}

convertToRoman(36);

// digitToRomanInArabicNumerals function using switch
function digitToRomanInArabicNumerals(n, place) {
  let pattern = [];
  let shifter = Math.pow(10, place);

  if (place > 2) {
    for (let i = 0; i < n * Math.pow(10, place - 3); i++) {
      pattern.push(1000);
    }
  } else if (n === 0) {
    return pattern;
  } else {
    for (let i = 1; i <= n; i++) {
      switch (i) {
        case 1:
        case 2:
        case 3:
          pattern.push(1 * shifter);
          break;
        case 4:
          pattern.splice(0, 2);
          pattern.push(5 * shifter);
          break;
        case 5:
          pattern.shift();
          break;
        case 6:
        case 7:
        case 8:
          pattern.push(1 * shifter);
          break;
        case 9:
          pattern.splice(0, 3);
          pattern.push(10 * shifter);
          break;
      }
    }
  }
  return pattern;
}
