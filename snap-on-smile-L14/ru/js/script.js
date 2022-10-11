$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    lastpack(2, 60, 'lastpack');

    /*Smooth scroll*/
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elemenOffset = $(elementId).offset().top;
        $("html,body").animate({
           scrollTop: elemenOffset
        }, 500);
    });

});