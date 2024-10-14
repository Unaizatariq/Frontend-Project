$(document).ready(function() {
    // jQuery Validation
    $("#contactForm").submit(function(event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
        let formMessages = $("#formMessages");

        formMessages.text(''); // Reset messages

        if (name === "" || email === "" || message === "") {
            formMessages.text("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            formMessages.text("Please enter a valid email.");
            return;
        }

        // Successful form submission simulation
        formMessages.text("Thank you for your message! We will get back to you soon.");
        formMessages.css('color', 'green');

        // Clear the form
        $("#contactForm")[0].reset();
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
