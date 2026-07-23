// Find the button. 
const welcomeButton = document.getElementById("welcomeButton"); 
 
// Find the paragraph that will be updated. 
const message = document.getElementById("message"); 
 
// Confirm that the script is running. 
console.log("The interactive page has loaded."); 
 
// Wait for the button to be clicked. 
welcomeButton.addEventListener("click", function () { 
 
    // Change the text inside the paragraph. 
    message.textContent = 
        "JavaScript changed this message without reloading the page."; 
 
    console.log("The page message was updated."); 
}); 