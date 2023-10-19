// 01 FIX Errors
userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return (result = name.length);
}

console.log("01 FIX the Errors");
console.log(getUserNameLength(userName) > 4); //Should log true

// 02 isString function
function isString(str_isString) {
  return typeof "" == typeof str_isString;
}

console.log("\n02 isString function");
console.log(isString("Hello")); // result should be true
console.log(isString(3)); // result should be false
console.log(isString(undefined)); // result should be false
console.log(isString("")); // result should be true
console.log(isString("John" + "Doe")); // result should be true
