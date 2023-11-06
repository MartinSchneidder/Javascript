/**
 * Count Vovels: a, e, i, o, u
 * @param {string} str
 * @returns number of vovels in a string
 */
function getCount(str) {
  return str
    .split("")
    .reduce(
      (count, char) =>
        char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
          ? count + 1
          : count,
      0
    );
}
console.log(getCount("abracadabra"));

//OR IN NICE
function getCount2(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
