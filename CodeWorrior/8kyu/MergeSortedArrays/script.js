/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function mergeArrays(arr1, arr2) {
  let result = arr1.concat(arr2);
  result.sort((a, b) => a - b);
  result = result.filter((x, index) => result.indexOf(x) === index);
  return result;
}
let arr1 = [6, 6, -1, 6, 1, 2, 3, 4];
let arr2 = [9, 9];

console.log(mergeArrays(arr1, arr2));

/**
 * deletes Duplicates
 * @param {Array} arr
 */
function delDuplicates(arr) {
  return arr.filter((x, index) => arr.indexOf(x) === index);
}
//ODER WANDEL IN SET UM UND WIEDER ZURÜCK
