$(document).ready(function() {

    //timer 
    var duration = { d: 1, h: 1, m: 59, s: 59 },
      sf = 120,
      maxD = 2,
      maxH = 24,
      maxM = 60,
      maxS = 60;
  
    setInterval(function() {
      $('.d').html(duration.d);
      $('.hr').html(duration.h);
      $('.min').html(duration.m)
        .attr('data-t', duration.m - 1);
      $('.sec').html(duration.s)
        .attr('data-t', duration.s - 1);
      duration.s--;
      $('.sec').addClass('flip');
      $('.min').removeClass('flip');
      $('.id .circle').css('stroke-dashoffset', sf-(duration.d*(sf/maxD)));
      $('.ih .circle').css('stroke-dashoffset', sf-(duration.h*(sf/maxH)));
      $('.im .circle').css('stroke-dashoffset', sf-(duration.m*(sf/maxM)));
      $('.is .circle').css('stroke-dashoffset', sf-(duration.s*(sf/maxS)));
      if (duration.s === 58) {
        $('.m').addClass('flip');
      }
      if (duration.s === 0) {
        duration.m--;
        duration.s = 59;
        if (duration.m === 0) {
          duration.h--;
          duration.m = 59
        }
      }
    }, 1000);

    //adaptive table 
    $(".adaptive-table").rtResponsiveTables({
        containerBreakPoint: 767 
    });

    //sliders
    function initSlickSlider (slider) {
        slider.each( function() {
          $(this).slick({
            prevArrow: '<button class="slick-prev slick-arrow"></button>',
            nextArrow: '<button class="slick-next slick-arrow"></button>',
            arrows: true,
            fade: true,
            slidesToShow: +$(this).attr('data-items-xl'),
            slidesToScroll: +$(this).attr('data-items-xl'),
            responsive: [
              {
                breakpoint: 1141,
                settings: {
                  slidesToShow: +$(this).attr('data-items-xl'),
                  slidesToScroll: +$(this).attr('data-items-xl'),
                }
              },
              {
                breakpoint: 1140,
                settings: {
                  slidesToShow: +$(this).attr('data-items-lg'),
                  slidesToScroll: +$(this).attr('data-items-lg'),
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: +$(this).attr('data-items-md'),             
                  slidesToScroll: +$(this).attr('data-items-md'),
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: +$(this).attr('data-items-sm'),
                  slidesToScroll: +$(this).attr('data-items-sm'),
                }
              }
            ]
          });
        })
    }
    initSlickSlider($('.carousel'));

});
