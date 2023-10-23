window.onload = init; 

// Use window.onload to ensure the code runs when the page has fully loaded
window.onload = init;

function init() {
    // Get the button element by its ID
    var greetTheUserBtn = document.getElementById("greetTheUserBtn");

    // Set the event listener for the button's click event
    greetTheUserBtn.onclick = onGreetTheUserBtnClicked;
}

function onGreetTheUserBtnClicked() {
   
    var nameTextBox = document.getElementById("nameTextbox");
    var nameValue = nameTextBox.value;
    let greetingMessage = "hello " + nameValue;

    const outputh1 = document.getElementById("outputh1");
    outputh1.innerHTML = greetingMessage

    
}
