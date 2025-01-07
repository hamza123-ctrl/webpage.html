
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else {
            alert("Login successful! Welcome, " + username + "!");
            
        }
    });
});