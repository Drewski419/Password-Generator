// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var selectedCharacters = [];

function generatePassword(length) {
  var result = '';
  var characters = selectedCharacters;
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
}

// Write password to the #password input
function writePassword() {
  selectedCharacters = [];

  //prompt for password length
  var passwordLength = prompt("Select a password length between 8 and 128");

  //logic to ensure correct length selected
  if (passwordLength >= 8 && passwordLength <= 128) {

    console.log(passwordLength);

    //prompts for selecting character type
    var LC = confirm("Use Lower case characters?");
    var UC = confirm("Use Upper case characters?");
    var N = confirm("Use Numeric characters?");
    var SC = confirm("Use Special characters?");

    //code to make sure a character is selected
    if (LC == true || UC == true || N == true || SC == true) {
      console.log("sanity check")

      if (LC == true) {
        selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
        console.log("sanity LC")
      }

      if (UC == true) {
        selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
        console.log("sanity UC")
      }

      if (N == true) {
        selectedCharacters = selectedCharacters.concat(numericCharacters);
        console.log("sanity N")
      }

      if (SC == true) {
        selectedCharacters = selectedCharacters.concat(specialCharacters);
        console.log("sanity SC")
      }

      console.log(selectedCharacters);

      selectedCharacters = selectedCharacters.join("")
      var password = generatePassword(passwordLength);
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;

    }

    else {
      alert("Please select at least one character type");
    }

  }

  //error message if incorrect values entered
  else {
    alert("Please enter a value between 8 and 128");
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


