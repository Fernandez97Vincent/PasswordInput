// Assignment code here

// start with the password variables
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// symbols
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// numbers
var numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function to prompt user for different password options
function getPasswordOptions() {

  var length = parseInt(prompt("How many characters would you like your password to have"));

  alert(length);

  // if statements if password does not meet the certain requirements
  if(Number.isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  if (length > 128) {
    alert("Password length must be less than 129 characters");
    return null;
  }

  // if password has upper, lower, special, or numeric characters
  var withSpecialCharacters  = confirm(
    "Click OK to confirm including special characters"
  )

  var withUpperCaseCharacters = confirm(
    "Click OK to confirm including upper case characters"
  )

  var withLowerCaseCharacters = confirm(
    "Click OK to confirm including lower case characters"
  )

  var withNumberCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  //if statement if user does not use any of the listed criteria
  if(withSpecialCharacters === false &&
    withUpperCaseCharacters === false &&
    withLowerCaseCharacters === false &&
    withNumberCharacters == false) {
      alert("Must select as least one character type!");
      return null;
    }

  var passwordOptions = {
    length: length,
    withSpecialCharacters: withSpecialCharacters,
    withUpperCaseCharacters: withUpperCaseCharacters,
    withLowerCaseCharacters: withLowerCaseCharacters,
    withNumberCharacters: withNumberCharacters
  }

  return passwordOptions;

}


// function to generate a random password
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// function to generate the password
function generatePassword () {
  var options = getPasswordOptions();
  var results = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if(!options) return null;


  if(options.withSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  } 
  
  if(options.withUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  } 


  if(options.withLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  } 


  if(options.withNumberCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters)
    guaranteedCharacters.push(getRandom(numberCharacters));
  } 

  

  for(var index = 0; index < options.length; index++) {
    var possibleCharacter = getRandom(possibleCharacters);

    results.push(possibleCharacter);
  }

  for(var index = 0; index < guaranteedCharacters.length; index++) {
    results[index] = guaranteedCharacters[index];
  }

  return results.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
