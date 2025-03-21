window.addEventListener("load", function() { //script runs only after entire page is loaded
    var clearButton = document.getElementById("clearButton"); //clear button
    var colorPicker = document.getElementById("colorPicker"); //color picker
    var sizePicker = document.getElementById("sizePicker"); // dot size picker 
  
    clearButton.addEventListener("click", function(event) { //when clear button is clicked 
        var dots = document.querySelectorAll(".dot"); //get all dots 
        dots.forEach(dot => dot.remove()); //remove all dots 
  
        event.stopPropagation(); // Stop dots from appearing when clicking the button
    });
  
    document.addEventListener("click", function(event) { //when tehre are clicks on page
        if (!event.target.closest(".buttons")) { // if click isn't on buttons/color picker
            var dot = document.createElement("div"); //then create new dot
            dot.className = "dot"; 
  
            var size = sizePicker.value; //sets the size and color of dot using pixels 
            dot.style.width = size + "px";
            dot.style.height = size + "px";
            dot.style.backgroundColor = colorPicker.value;
  
            dot.style.left = (event.pageX - size / 2) + "px"; //loctation of the dot is same as click location 
            dot.style.top = (event.pageY - size / 2) + "px";
  
            document.body.appendChild(dot); //enables dot to appear on page 
        }
    });
  });
