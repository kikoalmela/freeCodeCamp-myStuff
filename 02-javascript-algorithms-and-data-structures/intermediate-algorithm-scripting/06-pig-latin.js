// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  return str.replace(/(\b[^aeiou]*)(\w*)/, function(match, p1, p2) {
    if (p1.length > 0) return p2 + p1 + 'ay';
    else return p2 + 'way';
  });
}

translatePigLatin('consonant');
