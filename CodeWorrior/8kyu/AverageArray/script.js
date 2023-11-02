/**
 *
 * @param {Array} array
 * @returns
 */
function findAverage(array) {
  // SUM/LENGTH
  if (array.length > 0) {
    return array.reduce((a, b) => a + b) / array.length;
  } else return 0;
}

console.log(findAverage([]));
