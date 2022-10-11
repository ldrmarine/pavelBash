$(document).ready(function() {


	$('form').on('change', function () {
		let params = {
			"other[address]": $('input[name=address]').val(),
			"other[city]": $('input[name=city]').val(),
			"other[zipcode]": $('input[name=zipcode]').val(),
			"other[quantity]": $('select[name=quantity]').val(),
			"other[notes]": $('input[name=notes]').val()
		};
		let result = decodeURIComponent($.param(params));
		$('input[name=comment]').val(result);
	});
	$(".nospace").on('input', function(){
		if ($(this).val() === ' ') {
			$(this).val('');
		}
	});


	
	/* scroll */
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		if (min < 10) {
			min = min + 20
		}
		$(".timer .hours").html( pad(00));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();


});

$(window).on("load", function(){

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		nav: true,
		navText: ""
	});
	
});

$(document).ready(function(){

	$("#gallery-slider").owlCarousel({
		items: 3,
		loop: true,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: true,
		touchDrag: true,
		nav:true,
		navText: "",
		dots: true,
	});
	
});
