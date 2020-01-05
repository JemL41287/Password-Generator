var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function passwordOptions() {
  var length = parseInt(prompt(
    "How many characters would you like your password to be?"
  ));

  if (isNaN(length) === true){
    alert("Password length must be a number");
    return;
  }

  if (length < 8) {
    alert ("Password must be at least 8 characters");
    return;
  }

  if (length > 128) {
    alert ("Password must be less than 129 characters");
    return;
  }

  var containsSpecialCharacters = confirm ("Would you like to include special characters?");
  

  var containsNumericCharacters = confirm ("Would you like to include numeric characters?");


  var containsLowerCaseCharacters = confirm ("Would you like to include lowercase letters?");
  

  var containsUpperCaseCharacters = confirm ("Would you like to include uppercase letters?");
  
  if (
  containsSpecialCharacters === false &&
  containsNumericCharacters === false &&
  containsLowerCaseCharacters === false &&
  containsUpperCaseCharacters === false
  ) {
  alert ("You must include at least one character type");
  return;
  }

 var passwordChoices = {
   length: length,
   containsSpecialCharacters: containsSpecialCharacters,
   containsNumericCharacters: containsNumericCharacters,
   containsLowerCaseCharacters: containsLowerCaseCharacters,
   containsUpperCaseCharacters: containsUpperCaseCharacters,
 };

 return passwordChoices;

}

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()*arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}


function generatePassword () {
  var options = passwordOptions ();
  var result = [];

  var possibleCharacters = [];

  var chosenCharacters = [];

  if (options.containsSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    chosenCharacters.push(getRandom(specialCharacters));
  }

  if (options.containsNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    chosenCharacters.push(getRandom(numericCharacters));
  }

  if (options.containtsLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    chosenCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.containtsUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    chosenCharacters.push(getRandom(upperCaseCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < chosenCharacters.length; i++) {
    result[i] = chosenCharacters[i];
  }

  return result.join("");
}

var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.querySelector();
  document.execCommand("copy");

  alert("Your Password" + passwordText.value + "was copied to your clipboard.");

}

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);


