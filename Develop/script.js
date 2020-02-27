// Assignment Code
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specChar = "~!@#$%^&*()_+{}[];'/?.,><";

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //prompt user for length of password
  var passwordLength = prompt("Please enter the length of password:");

  if (passwordLength < 8 || passwordLength >= 128) {
    alert("Password length should be between 8 and 128 characters.");
  } 
  
    else {
    //prompt user for series of criteria type
    var criteria = " ";

    if (confirm("Do you want to use lowercase in password?")) {
      criteria += lowCase;
    }
    if (confirm("Do you want to use uppercase in password?")) {
      criteria += upCase;
    }
    if (confirm("Do you want to use numeric in password?")) {
      criteria += numeric;
    }
    if (confirm("Do you want to use special characters in password?")) {
      criteria += specChar;
    } else {
      alert("At least one type of criteria should be selected");
    }

    //random pickup character from criteria string to generate new password
    var newPassword = " ";

    for (let i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * criteria.length + 0);
      newPassword += criteria.charAt(index);
    }
    return newPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
TO DO: 
at least one type criteria to be selected
prompt text box placeholder
readme file
*/
