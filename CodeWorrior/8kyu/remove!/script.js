/**
 * Remove an exclamation mark from the end of a string
 * @param {string} string
 * @returns
 */
function removeExclammark(string) {
  return string[string.length - 1] == "!"
    ? string
        .split("")
        .reverse()
        .join("")
        .replace("!", "")
        .split("")
        .reverse()
        .join("")
    : string;
  // return string.replace(/!$/, "");
}
console.log(removeExclammark(" ! ! xxxx ! !"));
