//DOM elements/////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateBtn = document.querySelector("generate");

var textareaEl = document.getElementById("password");
//possible password values in  strings////////////////////////////////////////////////////////////////////////////////////////////////
  var lowerC = "abcdefghijklmnopqrstuvwxyz";
    
  var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
  var specialC = "!@#$%^&*()_+=~?.><";
  
  var numbers = "0123456789";
  
  var newPassword = [];


//////////function when generate button is clicked user will get new password///
  function generatePW() {
    document.getElementById("password").textContent = password;
 }
  ///USER PROMPTS FOR PASSWORD PREFRENCE////////////
 var howMany = parseInt(prompt("How many characters do you want in your Password? Choose between 8-128"));
  
  
    if (howMany <8) {
     alert ("Please choose between 8-128");
   }
    if (howMany >128){ 
      alert ("Please choose between 8-128");}
 
   if (isNaN (howMany))  
    { alert ( "Please enter a number between 8-128");
    }
 
  var upper = confirm ("Would you like to use upper case letters in your password?");
   
  var lower = confirm ("Would you like to use lower case letters in your password?");
 
  var number = confirm ("Would you like to use numbers?");
 
  var special= confirm ("Would you like to use special characters?");
         
  if (!(upper || lower || number || special)) {
      alert ("Please select values!");
  }
  
console.log(howMany);
console.log(upper);
console.log (number);
console.log(special);

  if (upper === true) {
    (newPassword.push(upperC));
 }
  if (lower === true) {
     (newPassword.push(lowerC));
  }
 if (number === true) {
     (newPassword.push(numbers));
  }
 if (special = true) {
     (newPassword.push(specialC));
  }
 
 var newPWstr = newPassword.join("");
  
 var password = "";
 
 for (var i = 0; i < howMany; i++) {
 var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
 password = password.concat(genChr);
 
 }
 
alert ("Click the Generate Password Button to recieve your Password.")


console.log(password)


function newPassword(){
  textareaEl.value = password()
  generateBtn.addEventListener ("click",password);

}
 


   
  

