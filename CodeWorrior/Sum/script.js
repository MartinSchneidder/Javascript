/**
 *  returns the sum of the numbers
 * @param {Array} numbers Array of numbers
 */
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else return numbers.reduce((a, b) => a + b);
}
console.log(sum([0, -1.1, 1, 2]));
