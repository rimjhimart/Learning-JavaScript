// Prompt the user to enter their name
var userName = prompt("Please enter your name:");

// Check if the user entered a name
if (userName) {
    // Display a greeting message
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    // If the user didn't enter a name, display a default message
    alert("Hello there! Welcome to our website.");
}