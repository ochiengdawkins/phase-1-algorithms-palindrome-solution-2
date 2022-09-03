function isPalindrome(word) {
  // iterating string from start to middle
  for (let startString = 0; startString < word.length / 2; startString++) {
    // comparing the current iteration i.e. letter to the end letter
    const endLetter = word.length - 1 - startString;
    if (word[startString] !== word[endLetter]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // return true if we reach middle and we have a match
  return true;
}

/*
compare the start letter to the end letter , meaning i have to create a loop to iterate my word.
*/


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;