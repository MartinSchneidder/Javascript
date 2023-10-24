/**
 * Finds the index of an element "needle" in an array
 * @param {Array} haystack
 */
function findNeedle(haystack) {
  let pos = 0;
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] !== "needle") {
      pos++;
    } else break;
  }
  return "found the needle at position " + pos;
  //return "found the needle at position " + haystack.indexOf("needle");
}

let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(arr));
