window.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});


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


