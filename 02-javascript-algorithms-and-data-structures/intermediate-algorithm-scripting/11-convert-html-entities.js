// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// using regular expressions and replacer
function convertHTML(str) {
  // &colon;&rpar;
  let re = /[&<>"']/g;

  function replacer(match) {
    console.log(match);
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
  }

  return str.replace(re, replacer);
}

// using a lookup object
function convertHTML(str) {
  let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str
    .split('')
    .map(char => htmlEntities[char] || char)
    .join('');
}

convertHTML('Dolce & Gabbana');
