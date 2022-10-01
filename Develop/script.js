// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = "'!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var upperCase = []

//var toUpper = function (x) {
 // return x.toUpperCase();
//}



function generatePassword(){
// prompt user for password length 8-128 characters
    var userInput = window.prompt("How many characters would you like your password to be? (8-128 characters) ")
    var passwordLength =parseInt(userInput)
//alerts user password needs to be a number and confirms length     
    if(isNaN(passwordLength)){
      alert ("Please enter digit");
      return false
    }
    if(passwordLength < 8 || passwordLength >128){
      alert("Password must contain 8-128 characters. please try again")
      return false
    }
   
    confirmLowercase = window.confirm("Would you like to include lowercase?")
    confirmUppercase = window.confirm("Would you like to include uppercase?")
    confirmNumber = window.confirm("Would you like to include numbers?")
    confirmSpecialchar = window.confirm("Would you like to include special characters?")
  
    return "generated password"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
