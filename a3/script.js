function createRhombus() { 
    let height = parseInt(document.getElementById("rHeight").value); // height input
    let colorOdd = document.getElementById("colorOdd").value; // odd color input 
    let colorEven = document.getElementById("colorEven").value; // ecen color input 
    let symbol = document.getElementById("symbol").value;  // symbol input
    let output = ""; // tto store the output

    for (let i = 1; i <= height; i++) { // loop for top half of the rhombus
        output += "<div>"; // new line 
        for (let j = 0; j < i * 2 - 1; j++) { // Loop for symbols 
            let symbolColor = j % 2 === 0 ? colorOdd : colorEven; // Alternate even and odd colors 
            output += '<span class="' + symbolColor + '">' + symbol + '</span>'; //add to output 
        }
        output += "</div>"; // End line
    }

    for (let i = height - 1; i >= 1; i--) { // loop for bottom half of the rhombus
        output += "<div>"; // new line 
        for (let j = 0; j < i * 2 - 1; j++) { // Loop for the symbols 
            let symbolColor = j % 2 === 0 ? colorOdd : colorEven; // Alternate colors for odd and even positions
            output += '<span class="' + symbolColor + '">' + symbol + '</span>';
        }
        output += "</div>"; // End the line
    }

    document.getElementById("rhombusOutput").innerHTML = output; // Set the inner HTML of the output element to the generated rhombus
}
