const stringToNumber = function (str) {
  return Number(str);
};

const stringToNumber2 = function (str) {
  return str * 1;
};
/**
 *
 * @param {string} str
 * @returns
 */
const stringToNumber3 = function (str) {
  return str.replace((a) => Number(a));
};
console.log(stringToNumber("-123"));
console.log(stringToNumber2("-123"));
console.log(stringToNumber3("-123"));
