/**
 *
 * @param {string} str
 */
function isIsogram(str) {
  const uniq = new Set(str.toLocaleLowerCase());

  return uniq.size == str.length;
}

console.log(isIsogram("Hello2!"));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse!"));
console.log(isIsogram("aba!"));
