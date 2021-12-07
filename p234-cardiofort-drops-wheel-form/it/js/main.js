jQuery(document).ready(function ($) {
    // -------------spin-------------------
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function (event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function () {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function () {
                $('.spin-wrapper').slideUp();
                $('.order').slideDown();
                let timerHour = $('.clock').data('hour');
                let timeMinutes = $('.clock').data('minutes');
                let time = (timerHour * 60 + timeMinutes) * 60000;
                let fiveSeconds = new Date().getTime() + time;
                $('.clock').countdown(fiveSeconds, {
                        elapse: true
                    })
                    .on('update.countdown', function (event) {
                        let $this = $(this);
                        if (event.elapsed) {
                            $this.html("00:00");
                        } else {
                            $this.html(event.strftime('<span>%M</span> : <span>%S</span>'));
                        }
                    });
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $('.close-popup, .spin-result-wrapper').click(function () {
        resultWrapper.fadeOut();
    });


    // --------------SCROLL-------------------
    $("a").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('.toform').offset().top
        }, 400);
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");


    $(".close, .submit-popup").click(function () {
        $(".screenLock").fadeOut(300);
    });
    var flag = true;
    $(window).mouseout(function (e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $(".screenLock").fadeIn(100, function () {
                $(".msg").fadeIn(300).animate({
                    top: "150px"
                }, 300);
            });
            flag = false;
        }
    });
});