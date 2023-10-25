/**
 *  returns the additive inverse
 * @param {array} array array of positive or negative Numbers
 * @returns
 */
function invert(array) {
  return array.map((n) => -n);
}
console.log(invert([1, 2, -3, -4, 0]));
