/**
 *
 * @param {Array} array
 * @param {Number} number
 */
function evenNumbers(array, number) {
  let even = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      even.push(array[index]);
    }
  }

  return even.splice(-number);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log("Hello!");
