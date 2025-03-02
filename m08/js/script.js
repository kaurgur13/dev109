function addItem() { //function to add items to list
    let input = document.getElementById("itemInput");
    let itemText = input.value; // Directly use the input value without trimming

    if (itemText !== "") { // Check if the input is not empty
        let newItem = document.createElement("li");   
        newItem.textContent = itemText;  // creates new list items 
        document.getElementById("todo").appendChild(newItem); //makes new list itekms visable 
        
        //E.C. 
        input.value = ""; //clears text field after the new item has been added to the list
    }
}
   //E.C. 
document.getElementById("itemInput").addEventListener("keydown", function(event) { //event listener for return key 
    if (event.key === "Enter") { //when the return key (enter) is pressed 
        addItem(); //then add the item to list
    }
});
