/**
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
 * @param {Array} input
 */
function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;

  if (input === null) {
    return [];
  }
  if (input.length === 0) {
    return [];
  }

  input.forEach((element) => {
    if (element > 0) {
      count++;
    } else {
      sum += element;
    }
  });

  return [count, sum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
//[10, -65]
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
