
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const firstName = form.querySelector('input[placeholder="Enter First Name"]').value;
        const lastName = form.querySelector('input[placeholder="Enter Last Name"]').value;
        const cnic = form.querySelector('input[placeholder="Enter ID Number"]').value;
        const phone = form.querySelector('input[placeholder="Enter phone number"]').value;
        const email = form.querySelector('input[placeholder="Enter Email"]').value;
        const password = form.querySelector('input[placeholder="Enter your password"]').value;
        const rePassword = form.querySelector('input[placeholder="Retype your password"]').value;
        const termsCheckbox = form.querySelector('input[type="checkbox"]');
        if (!firstName || !lastName || !cnic || !phone || !email || !password || !rePassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== rePassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!termsCheckbox.checked) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        alert("Sign up successful! Welcome, " + firstName + " " + lastName + "!");
       
       
    });
});