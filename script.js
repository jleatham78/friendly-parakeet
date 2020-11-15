// Assignment code here
    var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var specialcharArr = ['!','"','#','$','%','&','(',')','*','+',',','-','.',':',';','<','>','?','@','[',']','/',']','^','_','{','}','|','~'];

    var numberArr = ('1','2,','3,','4','5','6','7','8','9','0');



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {}

//random number function

//function getRndInteger(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  
//}



// Write password to the #password input
  function writePassword() {
  var password = generatePassword () 
  
    
    var length = prompt("How long do you want your password to be?");
      if(length < 8 || length > 128) {
      alert("Please select a number greater than 8 and less than 128.");
      prompt("How long do you want your password to be?");
      }

    var result = []

    var lowerchar = confirm("Do you want to use lowercase letters in your password?");
    if(lowerchar) {
    result.push(lowercaseArr)
    }

    var numbers = confirm("Do you want to use numbers in your password?");
    if(numbers) {
    result.push(numberArr)
    }

    var upperchar = confirm("Do you want to use upper case letters in your password?");
    if(upperchar) {
    result.push(uppercaseArr)
    }

    var specchar = confirm("Do you want to use special characters in your password?");
    if(specchar) {
    result.push(specialcharArr)
    }

    console.log(result);
  
    //get Random number function (min, max)
    for (var i = 0; i < length; i++) {
      var item = numberArr[Math.floor(Math.random() * numberArr.length)];
      var item = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
      var item = uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
      var item = specialcharArr[Math.floor(Math.random() * specialcharArr.length)];
      console.log(numberArr.length);
    }



    //add loop how many times through result [] array
    //math.random//

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

