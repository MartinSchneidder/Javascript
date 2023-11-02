/**
 * returns a string of s repeated exactly n times
 * @param {number} n
 * @param {string} s
 * @returns
 */
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
  //OR
  return s.repeat(n);
}

console.log(repeatStr(3, "World"));
