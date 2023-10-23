//07) - arrays
console.log("07) - arrays\n");

//  1) removeItem function
console.log("\n01) removeItem function\n");
/**
 * Deletes an element.
 * @param {Array} array_listOfItems A list of Elements
 * @param {number} num_delete Tells which Element will be deleted
 * @returns
 */

function removeItem(array_listOfItems, num_delete) {
  //use ONE, Shallow or Deep!
  //shallowCOPY, not for multidimensinoal Arrays!
  let array_CopylistOfItems = array_listOfItems.slice();
  //DeepCOPY
  //   let array_CopylistOfItems = structuredClone(array_listOfItems);

  array_CopylistOfItems.splice(num_delete - 1, 1);
  return array_CopylistOfItems;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1)); // result should be: ["Cat", "Lion"]
console.log(ainmals); // result should be still: ["Dog", "Cat", "Lion"]
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3)); // result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits); // result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// 02) sumOfCharacters function
console.log("\n02) sumOfCharacters function");
/**
 * Counts 'characters' in an Array
 * @param {Array} array_listOfItems
 * @returns
 */

function sumOfCharacters(array_listOfItems) {
  //for all elements
  ///if type == string -> sum of chars

  let num_sum = 0;

  for (let index = 0; index < array_listOfItems.length; index++) {
    if (typeof array_listOfItems[index] == "string") {
      num_sum += array_listOfItems[index].length;
    }
  }

  return num_sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1)); // result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2)); // result should be: 55
