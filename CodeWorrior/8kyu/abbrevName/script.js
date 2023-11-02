/**
 * takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * Blub Master -> B.M
 * @param {string} name
 */
function abbrevName(name) {
  return (
    name[0].toLocaleUpperCase() +
    "." +
    name.match(/ \w/).join().charAt(1).toLocaleUpperCase()
  );
}

function abbrevName2(name) {
  return name
    .split(" ")
    .map((i) => i[0].toLocaleUpperCase())
    .join(".");
}
let str = "martin scheider";
console.log(abbrevName(str));
console.log(abbrevName2(str));
