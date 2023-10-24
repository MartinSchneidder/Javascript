/**
 * Sums all numbers that are positive
 * @param {Array} arr , an Array of numbers
 * @returns Sum of all positive numbers
 */
function positiveSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      sum += arr[index];
    }
  }
  return sum;
}

arr = [-1, -2, -3, -4, 5, -6, -7, -8, -9, 10];
console.log(positiveSum(arr));
