//WRONG PROBLEM
// Shelter does not shield next shelter from bombs
/**
 *  [] <- Shelter saves letters, durability = 1
 *
 * \# <- Nuke, destoryes letters outside shelters, reduces shelter durability, if there is not shelter between
 * @param {String} battlefield a String like "asld#jkn[re]#[ds]" results in "ds"
 * @returns String with letters alive
 */
function alphabetWar(battlefield) {
  let result = battlefield;

  while (result.indexOf("#") > -1) {
    console.log("\n" + (result = destroyOutside(result)));
    console.log((result = boom(result, result.indexOf("#"))));
    console.log("\n");
  }

  return destroyAllShelter(result);
}
// console.log(alphabetWar("re[s]#[u]lt", "re[s]#[u]lt".indexOf("#")));
// console.log(alphabetWar("[0]1#2[x]34[y]5##6[7]"));
console.log(alphabetWar("[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#")); //abijk

//a[b]#[c]###[d]e     WHILE NUKES
//[b]#[c]###[d] OUTSIDE-
//bc###[d]     BOOM-
//###[d]        OUTSIDE
//##d          BOOM
//-> no more SHELTER but NUKES

//a[b][c]
//-> no NUKES
//abc  SHELTER Schleife/regexr

//
//a -> return

/**
 * removes first nuke and a bunker to the left and right
 * @param {string} field
 * @returns
 */
function boom(field) {
  let nextNuke = field.indexOf("#");
  let nextBunker = field.indexOf("[");
  let result = "";
  let fieldleft = field.slice(0, nextNuke);
  let fieldright = field.slice(nextNuke + 1);

  if (nextNuke < 0) {
    return field;
  }

  // console.log("\n    ", field);
  // console.log("LEFT", fieldleft, " --- ", fieldright, "RIGHT");

  if (nextBunker < 0) {
    return fieldleft + fieldright;
  }
  //FIELD RIGHT
  if (fieldright.indexOf("[") > -1) {
    result = fieldright.slice(0, fieldright.indexOf("["));
    result = result + fieldright.slice(fieldright.indexOf("[") + 1);
    result = result.slice(0, result.indexOf("]"));
    result = result + fieldright.slice(fieldright.indexOf("]") + 1);
    fieldright = result;
  }

  //FIELD LEFT
  if (fieldleft.lastIndexOf("[") > -1) {
    result = fieldleft.slice(0, fieldleft.lastIndexOf("["));
    result =
      result +
      fieldleft.slice(
        fieldleft.lastIndexOf("[") + 1,
        fieldleft.lastIndexOf("]")
      );
    result = result + fieldleft.slice(fieldleft.lastIndexOf("]") + 1);
    fieldleft = result;
  }

  result = fieldleft + fieldright;
  return result;
}

/**
 * destroyes letters outside of [bunkers]
 * @param {string} battlefield
 */
function destroyOutside(battlefield) {
  return battlefield.match(/(?=\[)..*?(?<=\])|#/g).join("");
}
/**
 * removes all SHELTER "[]"
 * @param {string} battlefield
 * @returns
 */
function destroyAllShelter(battlefield) {
  return battlefield.replaceAll("[", "").replaceAll("]", "");
}
/**
 * removes first NUKE "#"
 * @param {string} battlefield
 */
function destoryFirstNuke(battlefield) {
  return battlefield.replace("#", "");
}

console.log("HALLLLLLO");
