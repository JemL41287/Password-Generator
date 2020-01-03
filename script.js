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

  var specialCharacters = confirm ("Would you like to include special characters?");
  

  var numericCharacters = confirm ("Would you like to include numberic characters?");


  var numericCharacters = confirm ("Would you like to include lowercase letters?");
  

  var numericCharacters = confirm ("Would you like to include uppercase letters?");
  
  if (
  specialCharacters === false &&
  numericCharacters === false &&
  lowerCaseCharacters === false &&
  upperCaseCharacters === false
  ) {
  alert ("You must include at least one character type");
  return;
  }

 var passwordOptions = {
   length: length,
   specialcharacters: specialCharacters,
   numericCharacters: numericCharacters,
   lowerCaseCharacters: lowerCaseCharacters,
   upperCaseCharacters: upperCaseCharacters,
 };

 return passwordOptions;
}





// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  console.log ("write password")
  var length = passwordOptions ()
  console.log (length)
  var specialChar = specChar ()
  console.log (specialCharacters)
  var lowercase = lowerCase ()
  console.log (lowerCaseCharacters)
  var uppercase = upperCase ()
  console.log (upperCaseCharacters)

for (var i = 0; i < length; i++) {
  console.log (i)
  if (specialChar === true) {
  console.log ("Special character chosen")

  }
}




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
