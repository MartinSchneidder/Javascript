/**
 *  [] <- Shelter saves letters, durability = 1
 *
 * \# <- Nuke, destoryes letters outside shelters, reduces shelter durability, if there is not shelter between
 * @param {String} battlefield a String like "asld#jkn[re]#[ds]" results in "ds"
 * @returns String with letters alive
 */
function alphabetWar(battlefield) {
  //such #,
  //del lettrs till[ , destroy [] to right from index
  //del lettrs till] ,  destroy [] to left from index

  let result = battlefield;

  //   if (battlefield.indexOf("#") < 0) {}

  result = destroyShelter(battlefield, battlefield.indexOf("#"));
  console.log("lösch BUCHSATEBEN!!!!!!!!!!!!!! "); //!!!!!!!!!!!!!!!!!!!!!

  return result;
}

console.log(alphabetWar("[0]1#2[x]34[y]5#6[7]"));

/**
 * ONE NUKE DETONATES
 * @param {string} field
 * @param {number} nuke
 * @returns
 */
function destroyShelter(field, nuke) {
  if (field.indexOf("[") < 0) {
    return field;
  }
  if (field.indexOf("#") < 0) {
    return field;
  }
  let result = "";
  let fieldright = field.slice(nuke + 1);
  let fieldleft = field.slice(0, nuke);
  console.log("    ", field);
  console.log("LEFT", fieldleft, fieldright, "RIGHT");

  result = fieldright.slice(0, fieldright.indexOf("["));
  result = result + fieldright.slice(fieldright.indexOf("[") + 1);
  result = result.slice(0, result.indexOf("]"));
  result = result + fieldright.slice(fieldright.indexOf("]") + 1);
  fieldright = result;
  //RIGHT DONE
  result = fieldleft.slice(0, fieldleft.lastIndexOf("["));
  result =
    result +
    fieldleft.slice(fieldleft.lastIndexOf("[") + 1, fieldleft.lastIndexOf("]"));
  result = result + fieldleft.slice(fieldleft.lastIndexOf("]") + 1);
  fieldleft = result;
  //LEFT DONE

  result = fieldleft + fieldright;
  return result;
}
