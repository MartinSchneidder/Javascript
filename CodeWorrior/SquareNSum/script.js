/**
 * returns the Sum of the Squares of all Numbers in the Array
 * @param {Array} arr
 * @returns
 */

function squareSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index] * arr[index];
  }
  return sum;
}

function squareSum2(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
  //0+ 9 + 9 + 9
  //return numbers.reduce((sum, num) => sum + num * num);
  //3 + 9 + 9
}

let arr = [3, 3, 3];
console.log(squareSum(arr));
console.log(squareSum2(arr));
