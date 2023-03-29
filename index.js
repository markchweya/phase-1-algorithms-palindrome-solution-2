function isPalindrome(word) {
  // Write your algorithm here

for (let k = 0; k < word.length / 2; k++) {
    const l = word.length - 1 - k;
    if (word[k] !== word[l]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here

iterate from the beginning to the middle
  check each letter to the correponding letter from the end
    if any letters don't match, return false
return true

*/

/*
  Add written explanation of your solution here

  Two functions are used to check if the word is a palindrome
  One function converts the word into a string in which each letter is split into an array, that array is reversed then converted back to a string
  The second function takes the inputted word, compares it with the same word reversed by the other function and outputs true or false depending on whether the word is a palindrome or not
  The function also accounts for whether the first letter is capitalized so as not to return false when a palindrome is entered in that way
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
