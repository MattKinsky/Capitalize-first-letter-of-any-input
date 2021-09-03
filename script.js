// 3 different ways of capitalising only first letter in input name

// 1st way
var yourName = prompt("What's your name?"); 
yourName = yourName.charAt(0).toUpperCase() + yourName.toLowerCase().slice(1);
alert("Hello, " + yourName); 

// 2nd way
var yourName = prompt("What's your name?"); 
yourName = yourName.toUpperCase().slice(0,1) + yourName.toLowerCase().slice(1);
alert("Hello, " + yourName); 

// 3rd way
var yourName = prompt("What's your name?"); 
var firstChar = yourName.slice(0,1); 
var upperCaseFirstChar = firstChar.toUpperCase(); 
var lowerCaseRest = yourName.slice(1); 
lowerCaseRest = lowerCaseRest.toLowerCase();
var newName = upperCaseFirstChar + lowerCaseRest; 
alert(newName);
