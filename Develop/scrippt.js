// letters, upper and lower case
let lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// symbols
let specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// numbers
let numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];






// function to grab how many characters in the password
function passwordChoices() {

    //using parseInt to convert inputted string into a integer
    let passLength = parseInt(prompt("How many characters would you like your password to have?"));

    alert(passLength);

    // create an if statement if user enters a string rather than a number
    if (Number.isNaN(passLength)) {
        alert("Please enter a number and try again");
        return;
    }

    if (passLength < 8) {
        alert("Please enter a number greater than 7");
        return;
    }

    if (passLength > 129) {
        alert("Please enter a number less than 129");
        return;
    }

    // confirm with user if they want certain characters
    let inclLowerCaseCharacters = confirm("Click OK if you would like to user lowercase characters.");

    let inclUpperCaseCharacters = confirm("Click OK if you would like to use uppercase characters");

    let inclSpecialCharacters = confirm("Click OK if you would like to use special characters");

    let inclNumbers = confirm("Click OK if you would like to use numbers");


    // create an if else statement if user does not use characters
    if (inclLowerCaseCharacters === false &&
        inclUpperCaseCharacters === false &&
        inclSpecialCharacters === false &&
        inclNumbers == false) {
            alert("Please select a character option and try again");
            return;
        }


    let passOptions = {
        length: length,
        inclLowerCaseCharacters: inclLowerCaseCharacters,
        inclUpperCaseCharacters: inclUpperCaseCharacters,
        inclSpecialCharacters: inclSpecialCharacters,
        inclNumbers: inclNumbers
    }

    return passOptions;

}

// create a function to generate random password options with a parameter of an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random()* arr.length);
    let randomElement = arr[randomIndex];
    return randomElement;
}

// function to create a new password
function createPass() {
    let choices = passwordChoices();
    // allow the variables be an empty array
    let results = [];
    let possibleChoices = [];
    let guaranteedChoices = [];

    if(!choices) return null;

    if(choices.inclLowerCaseCharacters) {
        possibleChoices = possibleChoices.concat(lowerCaseCharacters)
        guaranteedChoices.push(getRandom(lowerCaseCharacters));
    }

    if(choices.inclUpperCaseCharacters) {
        possibleChoices = possibleChoices.concat(upperCaseCharacters)
        guaranteedChoices.push(getRandom(upperCaseCharacters));
    } 

    if(choices.inclSpecialCharacters) {
        possibleChoices = possibleChoices.concat(specialCharacters)
        guaranteedChoices.push(getRandom(specialCharacters));
    } 


    if(choices.inclNumbers) {
        possibleChoices = possibleChoices.concat(numberCharacters)
        guaranteedChoices.push(getRandom(numberCharacters));
    } 

    // now we loop through the possible choices
    for(let index = 0; index < choices.length; index++) {
        let possibleChoices = getRandom(possibleChoices);
        results.push(possibleChoices);    
    }

    // create a loop to loop through guaranteed choices
    for(let index = 0; index < guaranteedChoices.length; index++) {
        results[index] = guaranteedChoices[index];
    }

    // create a return that combines the results with no spaces
    return results.join("");

}

function makePassword() {
    let passsword = createPass();
    let passwordText = document.querySelector("#password");
    passwordText.value = passsword;
}

let generateBtn = document.querySelector("#generate");

// add an event listener when generate button is clicked
generateBtn.addEventListener("click", makePassword);




