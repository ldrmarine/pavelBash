$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 50;
        jQuery("html:not(:animated), body:not(:animated)").animate({
            scrollTop: destination
        }, 400);
        return false;
    })

    $(".textarea").focusin(function () {
        $('.disabled').removeClass('disabled');
    });


    $(".comment_container h3 span, .comment_count").html($(".comment_item").length);

    $(".fixed_bar_title").html($(".article_title").html());

    $(".article_header_text").append("<img id='header_img' src='img/1.jpg'/>");

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 595) {
        $('.fixed_bar').addClass("fixed_bar_show");
        $('.to-top-arrow').addClass("to-top-arrow-show");
    } else {
        $('.fixed_bar').removeClass("fixed_bar_show");
        $('.to-top-arrow').removeClass("to-top-arrow-show");
    }
});

window.addEventListener("load", function () {
    var sticky = document.querySelector('.fixed-block');
    var footer = document.querySelector('footer');
    var origOffsetY = sticky.offsetTop;
    var footerOffsetY = footer.offsetTop - 60;
    document.addEventListener('scroll', function (e) {
        if (window.scrollY >= origOffsetY + sticky.parentNode.offsetTop) {
            sticky.classList.add('stick-top');
        } else {
            sticky.classList.remove('stick-top');
        }
        if (window.scrollY + sticky.offsetHeight + 0 >= footerOffsetY) {
            sticky.classList.add('stick-bottom');
        } else {
            sticky.classList.remove('stick-bottom');
        }
    });
});