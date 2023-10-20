// 01) oddNumbers function
console.log("01) oddNumbers function");

function oddNumbers(num1, num2) {
  let num_helper = 0;
  let str_ausgabe = "";
  //Check for POSITIV NUMBERS, NUMBER DATATYPE
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != typeof 1 ||
    typeof num2 != typeof 1
  ) {
    return "invalid parameter";
  }
  //SpecialCases//
  ////num1 > num2 -> put smaller number in _num1////

  //APPROACH SWAP
  //   if (num1 > num2) {
  //     num_helper = num1;
  //     (num1 = num2), (num2 = num_helper);
  //   }
  //APPROACH RECURSION//
  if (num1 > num2) {
    oddNumbers(num2, num1);
  }
  ////////////////

  while (num1 <= num2) {
    if (num1 % 2 != 0) {
      str_ausgabe += num1;

      /* if last number is even, stop with "," */
      if (num1 + 1 != num2) {
        /* stop "," when at last number */
        if (num1 == num2) {
          break;
        }
        str_ausgabe += ",";
      }
    }

    num1 += 1;
  }

  return str_ausgabe;
}

console.log(oddNumbers(0, 4)); // result should be: 1,3
console.log(oddNumbers(10, 33)); // result should be: 11,13,15,17,19,21,23,25,27,29,31,33
console.log(oddNumbers(9, 12)); // result should be: 9,11

// 02) charCount function
console.log("\n02) charCount function");

function charCount(str_word = "", str_letter = "") {
  let num_counter = 0;
  let num_which_letter = 0;

  // CHECK FOR str_letter JUST 1 LETTER
  if (str_letter.length > 1) {
    return;
  }

  while (num_which_letter < str_word.length) {
    if (str_word[num_which_letter].toLowerCase() === str_letter.toLowerCase()) {
      num_counter++;
    }

    num_which_letter++;
  }

  return num_counter;
}

console.log(charCount("hello", "l")); // result should be: 2
console.log(charCount("mama", "m")); // result should be: 2
console.log(charCount("Resümee", "e")); // result should be: 3
console.log(charCount("AAA aaa", "a")); // result should be: 6
