// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = "'!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numbers = (0,1,2,3,4,5,6,7,8,9)
var alpha = ('a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z')

var passwordLength
var confirmUppercase
var confirmLowercase
var confirmSpecialChar
var confirmNumber

var toUpper = function (x) {
  return x.toUpperCase();
}



function generatePassword(){

    window.prompt("How many characters would you like your password to be? ")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);