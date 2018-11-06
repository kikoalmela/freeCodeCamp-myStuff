// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  // LBH QVQ VG!
  function replacer(letter) {
    let letterCode = letter.charCodeAt();

    // reduce code between 0 - 25
    let reducedCode = letterCode - 65;

    // rotate code by 13 between 0 -25
    let rotatedCode = (reducedCode + 13) % 26;

    // get encoded letter code
    let encodedLetterCode = rotatedCode + 65;

    // return encoded letter
    return String.fromCharCode(encodedLetterCode);
  }

  return str.replace(/[A-Z]/g, replacer);
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
