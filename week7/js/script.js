
//converting string input to uppercase
function convertToUppercase() {
  let inputText = document.getElementById("userInput").value; //inout from user 
  let upperText = inputText.toUpperCase(); //converts to uppercase
  document.getElementById("output").textContent = upperText;//displays the uppercase (output)
}

function displayDateTime() { //displays the local date (month, day, year) and time (hour, minute, second) 
  document.getElementById("dateTime").textContent = "Current Date/Time: " + new Date().toLocaleString('en-US');
}//updates html page to chnage the date and time displayed. toLocaleTimeString() method returns time ex:  https://www.w3schools.com/jsref/jsref_tolocaletimestring.asp 
window.onload = displayDateTime; //displays the date and time after the page is loaded. 
