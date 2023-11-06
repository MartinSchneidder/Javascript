// What dmg is done?
// damage = 50 * (attack / defense) * effectiveness
//
// attack = your attack power
// defense = the opponent's defense
// effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
//      Super effective: 2x damage
//      Neutral: 1x damage
//      Not very effective: 0.5x damage
//
// types: fire, water, grass, and electric
// fire > grass
// fire < water
// fire = electric
// water < grass
// water < electric
// grass = electric
// type against itself is not very effective

/**
 * calculates the dmg = 50 * (attack / defense) * effectiveness
 * @param {string} yourType
 * @param {string} opponentType
 * @param {number} attack
 * @param {number} defense
 */
function calculateDamage(yourType, opponentType, attack, defense) {
  let effectiveness = 0;
  switch (true) {
    case yourType == "fire" && opponentType == "water":
      effectiveness = 0.5;
      break;
    case yourType == "fire" && opponentType == "grass":
      effectiveness = 2;
      break;
    case yourType == "fire" && opponentType == "fire":
      effectiveness = 0.5;
      break;

    case yourType == "water" && opponentType == "fire":
      effectiveness = 2;
      break;
    case yourType == "water" && opponentType == "grass":
      effectiveness = 0.5;
      break;
    case yourType == "water" && opponentType == "electric":
      effectiveness = 0.5;
      break;
    case yourType == "water" && opponentType == "water":
      effectiveness = 0.5;
      break;

    case yourType == "grass" && opponentType == "fire":
      effectiveness = 0.5;
      break;
    case yourType == "grass" && opponentType == "water":
      effectiveness = 2;
      break;
    case yourType == "grass" && opponentType == "grass":
      effectiveness = 0.5;
      break;

    case yourType == "electric" && opponentType == "water":
      effectiveness = 2;
      break;
    case yourType == "electric" && opponentType == "electric":
      effectiveness = 0.5;
      break;

    default:
      effectiveness = 1;
      break;
  }
  return 50 * (attack / defense) * effectiveness;
}

console.log("fire");
console.log(calculateDamage("fire", "grass", 100, 100));
console.log(calculateDamage("fire", "fire", 100, 100));
console.log(calculateDamage("fire", "electric", 100, 100));
console.log(calculateDamage("fire", "water", 100, 100));
console.log("water");
console.log(calculateDamage("water", "fire", 100, 100));
console.log(calculateDamage("water", "water", 100, 100));
console.log(calculateDamage("water", "grass", 100, 100));
console.log(calculateDamage("water", "electric", 100, 100));
console.log("grass");
console.log(calculateDamage("grass", "water", 100, 100));
console.log(calculateDamage("grass", "grass", 100, 100));
console.log(calculateDamage("grass", "electric", 100, 100));
console.log(calculateDamage("grass", "fire", 100, 100));
console.log("electric");
console.log(calculateDamage("electric", "water", 100, 100));
console.log(calculateDamage("electric", "electric", 100, 100));
console.log(calculateDamage("electric", "grass", 100, 100));
console.log(calculateDamage("electric", "fire", 100, 100));
