/**
 *
 * @param {string} fight String of letters that can fight for LEFT or RIGHT
 * @returns
 */
function alphabetWar(fight) {
  //SOLDIERS: POSITIV for RIGHT, NEGATIV for LEFT
  let winner = 0;
  let soldiers = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  winner = fight
    .split("")
    .reduce((a, b) => (b in soldiers ? a + soldiers[b] : a + 0), 0);

  console.log(winner);

  if (winner < 0) {
    return "Left side wins!";
  }
  if (winner > 0) {
    return "Right side wins!";
  }

  return "Let's fight again!";
}

console.log(alphabetWar("swz"));
