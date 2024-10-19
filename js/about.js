//accordian// 
$(document).ready(function () {
    $('.accordion-header').click(function () {
        // Toggle the corresponding content
        $(this).next('.accordion-content').slideToggle();

        // Optionally, close other sections
        $('.accordion-content').not($(this).next()).slideUp();
    });
});

