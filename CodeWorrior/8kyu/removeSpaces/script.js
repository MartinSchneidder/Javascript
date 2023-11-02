/**
 *  removes the spaces from a string
 * @param {string} x
 */
function noSpace(x) {
  return x.replaceAll(" ", "");
}

console.log(noSpace(" a b c d e  f   gh      i "));
//abcdefghi
