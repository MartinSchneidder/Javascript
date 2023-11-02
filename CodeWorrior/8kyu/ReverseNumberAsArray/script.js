// 35231 => [1,3,2,5,3]
// 0 => [0]

/**
 * reverse and put in array
 * @param {number} n
 */
function digitize(n) {
  let arr = n.toString().split("").reverse();

  for (let index = 0; index < arr.length; index++) {
    arr[index] = Number(arr[index]);
  }

  return arr;
}

console.log(digitize(1234567890));

// console.log(Array.from(String(12345)).map(Number).reverse());
// console.log(Array.from(String(12345), Number).reverse());
// console.log(String(12345).split("").map(Number).reverse());
