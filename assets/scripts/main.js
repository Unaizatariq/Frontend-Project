document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal functionality
  window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  });

  // Slideshow functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change image every 3 seconds
  showSlide(currentSlide); // Initially show the first slide

  // Form submission event listener
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessages = document.getElementById("formMessages");

    formMessages.textContent = ""; // Reset messages

    if (!name || !email || !message) {
      formMessages.textContent = "All fields are required.";
      return;
    }

    if (!validateEmail(email)) {
      formMessages.textContent = "Please enter a valid email.";
      return;
    }

    // Successful form submission simulation
    formMessages.textContent = "Thank you for your message! We will get back to you soon.";
    formMessages.style.color = "green";

    // Clear the form
    document.getElementById("contactForm").reset();
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
