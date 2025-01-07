

window.onload = function() {
    alert("Welcome to HaZzz Motor Cars! Explore our amazing car collection.");
};


document.addEventListener("DOMContentLoaded", function() {
    const bookButtons = document.querySelectorAll("button a");

    bookButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const confirmBooking = confirm("Are you sure you want to book this car?");
            if (!confirmBooking) {
                event.preventDefault(); 
            }
        });
    });
});