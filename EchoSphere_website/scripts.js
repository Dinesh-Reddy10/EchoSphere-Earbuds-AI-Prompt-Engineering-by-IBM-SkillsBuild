$(document).ready(function() {
    // Add fadeIn animation to elements as the page loads
    $('.hero').addClass('animated fadeIn');
    $('.feature-card').each(function(index) {
        $(this).delay(index * 200).queue(function() {
            $(this).addClass('animated fadeInUp');
        });
    });

    // Smooth scrolling for "Shop Now" button
    $("a[href^='#']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
