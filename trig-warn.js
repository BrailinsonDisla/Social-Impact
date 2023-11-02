// gets the trigger warning cancel and accept buttons
const tw_cancel = document.getElementById("tw-cancel")
const tw_accept = document.getElementById("tw-accept")

// adds event listener to the cancel button
tw_cancel.addEventListener("click", () => {
    // redirect to google
    window.location.href = "https://www.google.com/";
});

// adds event listener to the accept button
tw_accept.addEventListener("click", () => {
    // store key-value pair to remember
    window.localStorage.setItem("visited", "true");
    // redirect to the main website's page
    window.location.href = "index.html";
});