// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const passwordLength = parseInt(window.prompt("Please enter a number between 8 and 128 to determine password length:"));
  const includeLowercase = window.confirm("Do you want to include lowercase letters?");
  const includeUppercase = window.confirm("Do you want to include uppercase letters?");
  const includeNumeric = window.confirm("Do you want to include numbers?");
  const includeSpecial = window.confirm("Do you want to include special characters?");
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "1234567890";
  const specialCharacters = "`~!@#$%^&*()_-+={[}]||;:<,>.?/";
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password is too short or too long. Please enter a number between 8 and 128 to determine password length.");
    return
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please confirm criteria to generate password.");
    return
  }
  let characterSet = "";
  if (includeLowercase) {
    characterSet += lowercaseCharacters;
  }
  if (includeUppercase) {
    characterSet += uppercaseCharacters;
  }
  if (includeNumeric) {
    characterSet += numericCharacters;
  }
  if (includeSpecial) {
    characterSet += specialCharacters;
  }
let password = "";
for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * characterSet.length);
  password += characterSet[randomIndex];
}
 return password; 
}
