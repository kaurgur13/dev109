function validateForm() {
    // variable for form field. 
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false; 
    var validAddress = false;
    var validState= false; 
    var validCountry = false; 
    var validZipCode = false; 
    var validCity = false; 


    // to store error messages for specific fields 
    var errorMessagesFirstname = "";
    var errorMessagesLastname = "";
    var errorMessagesEmail = "";
    var errorMessagesPhone = "";
    var errorMessagesUsername = "";
    var errorMessagesPassword = "";
    var errorMessagesAddress = "";
    var errorMessagesState = "";
    var errorMessagesCountry = "";
    var errorMessagesZipCode = "";
    var errorMessagesCity= "";

//First name 
var firstname = document.getElementById("FirstName").value.trim(); //get value for first name 
if (firstname === "" || firstname.length > 20 || /\d/.test(firstname)) { // Validation: check if empty, not more than 20 characters, and contains no numbers
        errorMessagesFirstname = " The first name is required and cannot be greater than 20 characters and must contain only letters."; //if condition isnt met, then use the error message 
    } else {
        validFirstname = true; //if condtions are met, then firstname is valid 
    }

    // Last name 
    var lastname = document.getElementById("LastName").value.trim(); //get value for last name 
    if (lastname === "" || lastname.length > 20 || /\d/.test(lastname)) { // Validation: check if empty, not more than 20 characters, and contains no numbers
        errorMessagesLastname = "The last name is required and cannot be greater than 20 characters and must contain only letters.";//if condition isnt met, then use the error message 
    } else {
        validLastname = true; //if condtions are met, then firstname is valid 
    }

    //Email 
    var userEmail = document.getElementById("Email").value.trim(); //get value for email 
    var atpos = userEmail.indexOf("@"); //"at position". Finding where "@" is 
    var dotpos = userEmail.lastIndexOf("."); //finding where "." is 
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) { //if "@", "." and atleast 2 chracters are present after dotpos 
        errorMessagesEmail = "Invalid email format."; //if condition isnt met, then use the error message 
    } else {
        validEmail = true; //if condtions met, then validd
    }



//phone 
    var phone = document.getElementById("PhoneNumber").value.trim(); //get value for phone 
    if (phone === "" || !phone.match(/^\d{10,15}$/)) { //if field is empty/ doesnt have 10-15 digits 
        errorMessagesPhone = "Invalid phone number format. Numerical values only."; //if condtions aren't met 
    } else {
        validPhone = true; //if condtions are met
    }


//Username
var username = document.getElementById("Username").value.trim(); //get value 
if (username === "" || username.length > 12) { //checks if field is empty/has 12+ chracters 
    errorMessagesUsername = "The username must be a maximum of 12 characters."; //error message 
} else {
    validUsername = true;//
}

//Password
var password = document.getElementById("Password").value.trim(); //gets value 
var hasUppercase = /[A-Z]/.test(password); //uppercase
var hasLowercase = /[a-z]/.test(password); //lowercase
var hasNumber = /\d/.test(password); //number
var hasSpecialChar = /\W/.test(password); // special characters
var isCorrectLength = password.length > 0 && password.length <= 7; //max 7 characters

if (isCorrectLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
    validPassword = true; //when all condtions are met password is valid 
} else { //otherwise, invalid and error message 
    errorMessagesPassword = "The password is required, must be a maximum of 7 characters, and must include an uppercase letter, a lowercase letter, a number, and a special character.";
}

//Adress 
   var address = document.getElementById("Address").value.trim(); 
   if (address === "") { //checks if field is emptty
       errorMessagesAddress = "The address is required."; //if empty then error message 
   } else {
       validAddress = true; 
   }


//City
   var city = document.getElementById("City").value.trim();
   if (city === "") {  //checks if field is empty
       errorMessagesCity = "The city is required.";//if empty then error message 
   } else {
       validCity = true; //valid if condtions are met
   }


   
//state
 var state = document.getElementById("state").value;
 if (state === "") { //checks if field is empty
     errorMessagesState = "The state is required."; //error message if empty
 } else {
     validState = true; //valid if condtions are met
 }

 //country 

 var country = document.getElementById("Country").value;
    if (country === "") {//checks if field is empty
        errorMessagesCountry = "The country is required."; //error message if empty
    } else {
        validCountry = true; //valid if condtions are met
    }

//ZipCode: 
var ZipCode = document.getElementById("ZipCode").value.trim();
if (country === "USA") { //country selcted is USA 
    if (ZipCode === "" || !/^\d{5}$/.test(ZipCode)) { //check if empty and has max 5 digits
        errorMessagesZipCode = "The ZipCode is required and must be maximum 5 digits."; //error message 
    } else {
        validZipCode = true;//valid if condtions are met for USA 
    }
} else {
    validZipCode = true; //valid if conditons met for countries other an USA
}

    // Display Error messages 
    document.getElementById("FirstNameError").innerHTML = errorMessagesFirstname;
    document.getElementById("LastNameError").innerHTML = errorMessagesLastname;
    document.getElementById("EmailError").innerHTML = errorMessagesEmail;
    document.getElementById("PhoneNumberError").innerHTML = errorMessagesPhone;
    document.getElementById("UsernameError").innerHTML= errorMessagesUsername;
    document.getElementById("PasswordError").innerHTML = errorMessagesPassword
    document.getElementById("AddressError").innerHTML = errorMessagesAddress
    document.getElementById("stateError").innerHTML = errorMessagesState
    document.getElementById("CountryError").innerHTML = errorMessagesCountry
    document.getElementById("ZipCodeError").innerHTML = errorMessagesZipCode
    document.getElementById("CityError").innerHTML = errorMessagesCity

    // Return true if all conditions are met
    return validFirstname && validLastname && validEmail  && validPhone && validUsername && validPassword &&validAddress && validCity &&validState && validCountry && validZipCode;
}
