// 01 Greet Function
function welcomeMsg(str_name) {
  return "Welcome " + str_name + "!";
}

// 02 Gross Price Function
function calcGrossPrice(num_netPrice, num_taxRate) {
  return num_netPrice + num_netPrice * num_taxRate;
}

// 03 Add positive Function
function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

//////////// Testausgabe ////////////

console.log("01 Greet Function");
console.log(welcomeMsg("Martin"));
console.log(welcomeMsg("Jane")); // Welcome Jane!
console.log(welcomeMsg("Marc")); // Welcome Marc!

console.log("\n");

console.log("02 Gross Price Function");
console.log(calcGrossPrice(100, 0.5));
console.log(calcGrossPrice(20, 0.19)); // result should be 23.8
console.log(calcGrossPrice(40, 0.16)); // result should be 46.4

console.log("\n");

console.log("03 Add positive Function");
console.log(addPositive(2, 3)); // result1 should be 5
console.log(addPositive(3, -5)); // result2 should be 8
console.log(addPositive(-1, -8)); // result2 should be 9
