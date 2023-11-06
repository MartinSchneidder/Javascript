/**
 *
 * @param {string} s
 */
function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
  return s.substring(s.length / 2, s.length / 2 + 1);
}
console.log(getMiddle("123456"));
console.log(getMiddle("abcdefghgfedcba"));
console.log("Hello!");
