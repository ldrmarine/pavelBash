jQuery(document).ready(function($) {
    $(".scroll_to_form").on("touchend, click", function() {
        $('body,html').animate({ scrollTop: $('.orderForm').offset().top }, 400);
    });
});