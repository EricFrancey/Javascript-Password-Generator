// Assignment Code
 let lettersLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 let lettersUp = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 let numbers = ["0","1","2","3","4","5","6","7","8","9"];
 let special = "!@#$%^&*_-+=";

let howLong = 10;
let upCase;
let lowCase;
let numChar;
let specChar;

//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var choice1 = prompt("How long? (8-128)");

  howLong= choice1;



    var choice2 = prompt("Lowercase?  Y/N");


    var choice3 = prompt("Uppercase?   Y/N");



    var choice4 = prompt("Numeric?   Y/N");
  

    var choice5 = prompt("Special?   Y/N");


   
    choice1 = choice1.toUpperCase();
    choice2 = choice2.toUpperCase();
    choice3 = choice3.toUpperCase();
    choice4 = choice4.toUpperCase();
    choice5 = choice5.toUpperCase();


    window.alert("Password will be presented in groups of four.");

for (let i = 0; i < choice1/4; i++) {


for (let i = 0; i < lettersLow.length; i++) {

    var indexLettersLow = Math.floor(Math.random() * lettersLow.length);
    var choiceLet1 = lettersLow [indexLettersLow];


}



for (let i = 0; i < lettersUp.length; i++) {

  var indexLettersUp = Math.floor(Math.random() * lettersUp.length);
  var choiceLet2 = lettersUp [indexLettersUp];

  

}


for (let i = 0; i < numbers.length; i++) {

  var indexnumbers = Math.floor(Math.random() * numbers.length);
  var choiceNum = numbers [indexnumbers];

  

}

for (let i = 0; i < special.length; i++) {

  var indexSpec = Math.floor(Math.random() * special.length);
  var choiceSpec = special [indexSpec];

  

}






//Loops for character types settings begin


if (choice2 === "Y" && choice3 === "N" && choice4 === "N"&& choice5 === "N") {

  window.alert("Your password: " + choiceLet1);

}

else if (choice2 === "N" && choice3 === "Y" && choice4 === "N"&& choice5 === "N") {

  window.alert("Your password: " + choiceLet2);

}

else if (choice2 === "Y" && choice3 === "N" && choice4 === "Y"&& choice5 === "N") {

  window.alert("Your password: " + choiceNum);

}

else if (choice2 === "Y" && choice3 === "N" && choice4 === "N"&& choice5 === "Y") {

  window.alert("Your password: " + choiceSpec);

}

else if (choice2 === "Y" && choice3 === "Y" && choice4 === "Y"&& choice5 === "Y") {

  window.alert("Your password: " + choiceLet1 + choiceLet2 + choiceNum + choiceSpec);

}

else if (choice2 === "N" && choice3 === "N" && choice4 === "N"&& choice5 === "N") {

  window.alert("Your password: ");

}



else

window.alert("Your password: " + choiceLet1 + choiceLet2 + choiceNum + choiceSpec);
}


// End character settings loop



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
