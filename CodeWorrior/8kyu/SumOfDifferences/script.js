/**
 * sum the differences between consecutive pairs in the array in descending order
 * @param {Array} arr
 */
function sumOfDifferences(arr) {
  if (arr.length < 1) return 0;

  let min = arr.reduce((a, b) => (a < b ? a : b));
  // console.log(min);
  let max = arr.reduce((a, b) => (a < b ? b : a));
  // console.log(max);

  return max - min;
}
let arr = [10, 2, 1];
// let arr = [];

console.log(sumOfDifferences(arr));

//Alternative
function sumOfDifferences2(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
console.log(sumOfDifferences2(arr));
