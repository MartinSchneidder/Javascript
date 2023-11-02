/**
 * replace any digit below 5 with '0' and any digit 5 and above with '1'
 * @param {string} str_x String of digits
 */
function fakeBin(str_x) {
  return str_x
    .split("") //['1','2','5']
    .map((x) => (x < 5 ? 0 : 1)) //[0,0,1]
    .join(""); //"001"
}
console.log(fakeBin("0123456"));
