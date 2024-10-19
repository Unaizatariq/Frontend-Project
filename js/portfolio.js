//masonry
$(document).ready(function () {
    var $grid = $('.portfolio-grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item', // Use grid items to set the width
        percentPosition: true
    });

    // Button click handlers
    $('#exploreServicesBtn').click(function () {
        window.location.href = '/portfolio.html'; // Change to your portfolio page URL
    });

    $('#discoverGiveawayBtn').click(function () {
        window.location.href = '/portfolio.html'; // Change to your portfolio page URL
    });
});


// portfolio preview or next images
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
        document.addEventListener('DOMContentLoaded', function () {
            var grid = document.querySelector('.portfolio-grid');
            
            // Wait until all images are loaded to initialize Masonry
            imagesLoaded(grid, function () {
                new Masonry(grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-item',
                    gutter: 10,
                    percentPosition: true
                });
            });
        });