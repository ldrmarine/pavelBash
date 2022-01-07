$(function() {
    // $('a[href*=#]:not([href=#]):not(.fancybox)').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });
      

    $('.flexslider').flexslider( {
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
    $('.step1').click(function() {
        $('.step2').removeClass('active');
        $('.step3').removeClass('active');
        $('.step1').addClass('active');
        $('.step2-content').css('display','none');
        $('.step3-content').css('display','none');
        $('.step1-content').css('display','block');
    });
    $('.step2').click(function() {
        $('.step1').removeClass('active');
        $('.step3').removeClass('active');
        $('.step2').addClass('active');
        $('.step1-content').css('display','none');
        $('.step3-content').css('display','none');
        $('.step2-content').css('display','block');
    });
    $('.step3').click(function() {
        $('.step1').removeClass('active');
        $('.step2').removeClass('active');
        $('.step3').addClass('active');
        $('.step1-content').css('display','none');
        $('.step2-content').css('display','none');
        $('.step3-content').css('display','block');
    });

});
