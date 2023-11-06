// check if the client has not visited this website
if (!localStorage.getItem("visited")) {
    window.location.href = "trigger-warning.html";
}