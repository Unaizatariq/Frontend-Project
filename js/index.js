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

//index page button landing
$(document).ready(function(){
    $('#exploreServicesBtn').click(function () {
        window.location.href = 'portfolio.html'; 
    });

    $('#discoverGiveawayBtn').click(function () {
        window.location.href = 'portfolio.html'; 
    });
});


//learnmore button
$(document).ready(function () {
    $('.learn-more').click(function () {
        window.location.href = 'services.html'; 
    });
});







