/**
 *
 * @param {Array} array
 * @param {Number} element
 */
function find(a, e) {
  if (a.includes(e)) {
    return a.indexOf(e);
  }
  return "Not found";
}

console.log(find([1, 2, 3, 4, 5], 5));

const findi = (a, e) => (a.includes(e) ? a.indexOf(e) : "Not found");
console.log(findi([1, 2, 3], 3));

const findx = (a, x) => ((x = a.indexOf(x)) < 0 ? "Not found" : x);
console.log(findx([1, 2, 3], 2));
