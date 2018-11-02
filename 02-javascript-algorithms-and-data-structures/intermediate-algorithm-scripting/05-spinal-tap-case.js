// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .replace(/(?<!_)\B[A-Z]/g, match => `-${match.toLowerCase()}`)
    .split(/[\s_]/)
    .join('-')
    .toLowerCase();
}

function spinalCase(str) {
  // --David St. Hubbins
  // "It's such a fine line between stupid, and clever."

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');
