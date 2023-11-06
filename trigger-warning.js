// gets the trigger warning cancel and accept buttons
const cancelButton = document.getElementById("cancel-button")
const acceptButton = document.getElementById("accept-button")

// adds event listener to the cancel button
cancelButton.addEventListener("click", () => {
    // redirect to google
    window.location.href = "https://www.google.com/";
});

// adds event listener to the accept button
acceptButton.addEventListener("click", () => {
    // store key-value pair to remember
    window.localStorage.setItem("visited", "true");
    // redirect to the main website's page
    window.location.href = "index.html";
});