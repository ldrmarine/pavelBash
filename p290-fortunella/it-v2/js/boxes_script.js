"use strict";

var par = location.hash.slice(1).split('~');
var parl = par.length;


if (parl > 2) isp = par[4].replace(/\+/g, ' ');
if ("vibrate" in navigator) {
  var vibr = 1;
} else var vibr = 0;

var count = 1;
$(function () {
  $(".try").click(function () {
    if (count < 2) {
      $(this).attr('src', "images/gift-box-opened.png");
      $(this).addClass('disabled');
      count++;

      document.querySelector(".sweet-overlay").classList.add('activating')

      setTimeout(function () {
        var sc2 = document.getElementById("success02");
        sc2.className += " animate";
        var sctip02 = document.getElementById("successtip02");
        sctip02.className += " animateSuccessTip";
        var md2 = document.getElementById("modal02");
        md2.className += " visible";
        var cnt = document.getElementById("cntVal");
        var so = document.querySelector(".sweet-overlay");
        so.style.display = "block";
      }, 800);
    } else {
      if (!document.querySelector(".sweet-overlay").classList.contains('activating')) {
        if (!$(this).hasClass('disabled')) {
          if (count < 3) {
            count++
            var discountBlock = document.getElementById("discount");
            $(this).replaceWith(discountBlock);
            $(discountBlock).addClass('show');
            setTimeout(function () {
              resultWrapper.style.display = "block";
            }, 500);

            setTimeout(function () {
              $('#boxes').slideUp();
              $('.order_block').slideDown();
              start_timer();
            }, 500);
          }

        }

      }
    }
  });
});
var counter = 1;
$(document).ready(function () {
  $('#update').on('click', function () {
    if (counter == 1) {
      document.querySelector(".sweet-overlay").classList.remove('activating')
      counter++;
      $('#cntVal').html(function (i, val) {
        return +val - 1
      });
    }
  });
});

function hidemodal01() {
  if (vibr > 0) navigator.vibrate(70);
  var modal1 = document.getElementById("modal01").classList.remove("visible");
  var so = document.querySelector(".sweet-overlay").style.display = "none";
}

function hidemodal02() {
  if (vibr > 0) navigator.vibrate(70);
  var modal2 = document.getElementById("modal02").classList.remove("visible");
  var so = document.querySelector(".sweet-overlay").style.display = "none";
}

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

var link = new URL(window.location.href);

$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
    return false;
  });
  $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click(function () {
    $('.eeee, .fadepopup').css('display', 'none');
  });
});


var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();

  var top = $('#roulette').offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});


var time = 600;
var intr;
var counting = 0;

function start_timer() {
  counting++
  if (counting === 1) {
    intr = setInterval(tick, 1000);
    counting++
  } else {
    return false
  }
};


function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  document.querySelector('#min').innerHTML = "" + mins;
  document.querySelector('#sec').innerHTML = secs
}





