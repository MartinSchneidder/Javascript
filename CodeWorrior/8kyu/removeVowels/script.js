/**
 *
 * @param {string} str
 * @returns
 */
function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = str;

  for (const vowel in vowels) {
    result = result.replaceAll(vowels[vowel], "");
  }

  return result;
}

console.log(disemvowel("aeioutAada"));

//BEST SOLUTION
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
