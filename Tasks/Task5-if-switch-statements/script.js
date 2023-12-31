// 01) Spot the errors and fix them
console.log("01) Spot the errors and fix them");

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "10 OR Lower than 10";
}

console.log(result); // Returns Greater than 10 but should return Greater than 20

// 02) oddEven function
console.log("\n" + "02) oddEven function");

// console.log(13 / 3);
// console.log(13 % 3);
// console.log(Math.floor(13 / 3));

function oddEven(number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4)); // result should be even
console.log(oddEven(3)); // result should be odd
console.log(oddEven(-1)); // result should be odd
console.log(oddEven(10)); // result should be even

// 03) oldYoung function
console.log("\n" + "03) oldYoung function");

function oldYoung(number) {
  if (number < 0 || typeof number != typeof 1) {
    return "invalid parameter";
  } else if (number < 16) {
    return "children";
  } else if (number < 50) {
    return "young person";
  } else return "elder person";
}

function oldYoungswitch(number) {}

console.log(oldYoung(27)); // result should be young person
console.log(oldYoung(6)); // result should be children
console.log(oldYoung(-1)); // result should be invalid parameter
console.log(oldYoung(86)); // result should be elder person
