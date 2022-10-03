// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!","@","#","$","%","^","&","*","(",")","=","+","~","<",">","[","]","{","}","?","/","-","_",".",":",";"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var options = [];


function generatePassword(){
   
// prompt user for password length 8-128 characters
    var passwordLength = parseInt(window.prompt('How many characters would you like your password to be? (8-128)'))
//confirms password length, alerts user   
    if(passwordLength < 8 || passwordLength >128){
      alert("Password must contain 8-128 characters. please try again")
      return false
    }
    var options = [];

    if(confirmlowerCase = window.confirm("Would you like to include lowercase?") == true ){
       options = options.concat(lowerCase);
  }
    if(confirmupperCase = window.confirm("Would you like to include uppercase?") == true ){
       options = options.concat(upperCase);
  }
    if(confirmNumber = window.confirm("Would you like to include numbers?") == true ){
       options = options.concat(numbers);
  }
    if(confirmSpecialchar = window.confirm("Would you like to include special characters?") == true ){
       options= options.concat(specialChar);
  }
    if (!confirmSpecialchar & !confirmNumber & !confirmupperCase & !confirmlowerCase) {
      options = alert("You must choose a parameter");

  }

  var  finalPass = "";

  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * options.length);
    finalPass = finalPass + options[randomIndex];
    
   
  }
  
  return finalPass;
   
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
