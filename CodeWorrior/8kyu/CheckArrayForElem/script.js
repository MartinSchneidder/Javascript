/**
 * Check whether the provided array contains the value.
 * @param {Array} a an array of numbers OR strings
 * @param {*} x an Value, Number or String
 * @returns Boolean
 */
function check(a, x) {
  let isXInA = false;
  a.forEach((element) => {
    if (element === x) {
      isXInA = true;
    }
  });
  return isXInA;
  //OR EasyWay
  return a.includes(x);
}

console.log(check([1, 2, 3, 4, 5], 2));
console.log(check([1, 2, 3, 4, 5], "2"));
