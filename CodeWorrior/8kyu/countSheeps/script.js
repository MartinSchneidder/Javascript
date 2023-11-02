function countSheeps(arr_boolean) {
  let sum = 0;
  for (let index = 0; index < arr_boolean.length; index++) {
    if (isbool(arr_boolean[index]) && arr_boolean[index]) {
      sum++;
    }
  }
  return sum;
}

function isbool(value) {
  return typeof value === "boolean";
}

let arr = [undefined, null, true, false, true, false, true, false];

console.log("\nAusgabe\n");
console.log(countSheeps(arr));

function countSheeps2(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
console.log("\nausgabe2\n");
console.log(arr.filter(Boolean));
console.log(countSheeps2(arr));
