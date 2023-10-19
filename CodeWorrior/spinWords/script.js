//Words with 5 letters or more will be SPINNED!!!
function spinWords(string) {
  let i = string.length;
  let spinword = "";
  let text;

  while (i > 0) {
    i = i - 1;
    spinword = spinword + string[i];
  }

  // word cat concat such nach " " -> abtrennen

  return spinword;
}

console.log(spinWords("Hello!"));
