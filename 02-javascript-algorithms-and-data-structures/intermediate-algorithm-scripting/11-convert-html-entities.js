// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  let re = /[&<>"']/g;

  function replacer(match) {
    console.log(match);
    switch (match) {
      case '&':
        return '&amp';
      case '<':
        return '&lt';
      case '>':
        return '&gt';
      case '"':
        return '&quot';
      case "'":
        return '&apos';
    }
  }

  return str.replace(re, replacer);
}

convertHTML('Dolce & Gabbana');
