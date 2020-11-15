// Variables
    var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var specialcharArr = ['!','"','#','$','%','&','(',')','*','+',',','-','.',':',';','<','>','?','@','[',']','/',']','^','_','{','}','|','~'];

    var numberArr = ['1','2,','3,','4','5','6','7','8','9','0'];

    var possibilities = [];

    var passlength = 0;

    var lowerchar = 0;

    var numbers = 0;

    var upperchar = 0;

    var specchar = 0;



// Write password to the #password input
var getCharacters = function() {
  
      passlength = prompt("How long do you want your password to be?");
      passlength = parseInt(passlength);
      if(passlength < 8 || passlength > 128) {
      alert("Please select a number greater than 8 and less than 128.");
      //passlength = prompt("How long do you want your password to be?");
      return getCharacters ();
      }
      
    //var guaranteed = []

    
    lowerchar = confirm("Do you want to use lowercase letters in your password?");
    if(lowerchar) {
      possibilities = possibilities.concat(lowercaseArr);
     //guaranteed.push(lowercaseArr[Math.floor(Math.random() * numberArr.length)]);
    }

    numbers = confirm("Do you want to use numbers in your password?");
    if(numbers) {
      possibilities = possibilities.concat(numberArr);
      //guaranteed.push(numberArr[Math.floor(Math.random() * numberArr.length)]);
    }

    upperchar = confirm("Do you want to use upper case letters in your password?");
    if(upperchar) {
      possibilities = possibilities.concat(uppercaseArr);
     
    //guaranteed.push(uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)]);
    }

    specchar = confirm("Do you want to use special characters in your password?");
    if(specchar) {
      possibilities = possibilities.concat(specialcharArr);
      
    //guaranteed.push(specialcharArr[Math.floor(Math.random() * specialcharArr.length)]);
    }

    console.log(possibilities);

    //console.log(guaranteed);
}
  
var generatePassword = function () {
  getCharacters(); 
  console.log(possibilities);
  var password = [];
    for (var i = 0; i < passlength; i++) {
      var possiblechar = Math.floor(Math.random() * possibilities.length);
      password.push(possibilities[possiblechar]);
    }
    console.log(password);
    password = password.join('');
    return password;
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

