
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="abc@gmail.com"]').value;
        const telephone = form.querySelector('input[placeholder="0321-6565655"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        if (!name || !email || !telephone || !message) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Thank you, " + name + "! Your message has been sent successfully.");
        
        form.reset();
    });
});