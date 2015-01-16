
// Define a function max() that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.
var max = function (a, b) {
  return (a > b) ? a : b;
};

// Define a function maxOfThree() that takes three numbers as arguments and
// returns the largest of them.
var maxOfThree = function (a, b, c) {
  return max(max(a, b), c);
};

// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.
var isVowel = function (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
};

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
var translate = function (text) {
  var chars = text.split('');
  newText = [];
  chars.forEach(function (char) {
    if (!isVowel(char) && char !== ' ') {
      newText.push(char + 'o' + char);
    } else {
      newText.push(char);
    }
  })
  return newText.join('');
};

// Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example,
// sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
var sum = function(arr) {
  var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
  })
  return sum;
};

var multiply = function(arr) {
  var product = arr.reduce(function (prev, curr) {
    return prev * curr;
  })
  return product;
};

// Define a function reverse() that computes the reversal of a string. For
// example, reverse("jag testar") should return the string "ratset gaj".
var reverse = function (str) {
  var chars = str.split('');
  revChars = chars.reverse();
  return revChars.join('');
};

// Represent a small bilingual lexicon as a Javascript object in the following fashion
// {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
// and use it to translate your Christmas cards from English into Swedish.
var englishToSwedishMap = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"
};

var translateToSwedish = function (text) {
  words = text.split(' ');
  var translated = words.map(function (word) {
    return englishToSwedishMap[word];
  });
  return translated.join(' ');
};

// Write a function findLongestWord() that takes an array of words and
// returns the length of the longest one.
var findLongestWord = function (words) {
  var lengths = words.map(function (word) {
    return word.length;
  });
  return Math.max.apply(Math, lengths)
};

// Write a function filterLongWords() that takes an array of words and an
// integer i and returns the array of words that are longer than i.
var filterLongWords = function (words, i) {
  return words.filter(function (word) {
    return word.length > i;
  });
};

// Write a function charFreq() that takes a string and builds a frequency
// listing of the characters contained in it. Represent the frequency
// listing as a Javascript object. Try it with something like
// charFreq("abbabcbdbabdbdbabababcbcbab").
var charFreq = function (text) {

  var chars = text.split('');
  var charHist = {};

  chars.forEach(function (char) {
    if (charHist[char] === undefined) {
      charHist[char] = 1;
    } else {
      charHist[char]++;
    }
  });

  return charHist;
};

