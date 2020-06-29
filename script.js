//generate query selector for id
var genEl = document.querySelector("#generate");
var responseEl = document.querySelector("#response");

//begins styling attributes
genEl.setAttribute("style", "margin:auto; text-align:center;");
responseEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
responseEl.setAttribute("style", "font-size:25px; text-align:center;");

//arrays to choose from to generate password
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ['!', '#', '$', '%', '&', '(', ')', '*','+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//begins event
function genPW (event) {
      event.preventDefault();

      //creates boolean values to determine what type of item to include in password
      var includeNum = false;
      var includeSpecial = false;
      var includeUpper = false;
      var includeLower = false;

      //ensures user picks at least one item to include in password
      while (!includeNum && !includeSpecial && !includeUpper && !includeLower) {
        alert("Include at least one option.")
        includeNum = confirm("Include numbers?");
        includeSpecial = confirm("Include special characters?");
        includeUpper = confirm("Include upper case?");
        includeLower = confirm("Include lower case?");
      }
      
      //variables to help determine aspects of password
      var length = 0;
      var password = "";
      var randOverall = 0;
      var randNum = 0;
      
      //ensures correct length for password
      while (length < 8 || length > 128) {
          length = prompt("Length of password?");
      }
      
      //generates random num, if boolean value is set to true, generates another random num and includes output in password
      while (password.length < length) {
          randOverall = Math.floor(Math.random() * 4);
      
          if (randOverall === 0 && includeNum) {
              randNum = Math.floor(Math.random() * 10);
              password = password + numbers[randNum];
          }
      
          else if (randOverall === 1 && includeSpecial) {
              randNum = Math.floor(Math.random() * 28);
              password = password + special[randNum];
          }
      
          else if (randOverall === 2 && includeUpper) {
              randNum = Math.floor(Math.random() * 26);
              password = password + upperCase[randNum];
          }
      
          else if (randOverall === 3 && includeLower) {
              randNum = Math.floor(Math.random() * 26);
              password = password + lowerCase[randNum];
          }
      }
      
      //outputs password
      var response = password;
      responseEl.textContent = response;
}

//more styling
genEl.setAttribute("style", "border-width: 5px; border-color: mediumslateblue;");
responseEl.setAttribute("style", "border-width: 30px; border-color: mediumslateblue;");

//calls function onClick
genEl.addEventListener("click", genPW);

