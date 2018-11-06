// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let i = 0;
  while (i < str.length - 1) {
    let currentCharCode = str.charCodeAt(i);
    i++;
    let nextCharCode = str.charCodeAt(i);
    if (currentCharCode + 1 !== nextCharCode) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined;
}

fearNotLetter('abce'); // should return "d".
fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // should return undefined.
