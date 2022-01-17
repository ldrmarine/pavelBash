var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
$("a[href='#wheel']").on("click", function (event) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#wheel").offset().top
  }, 500);
})

function spin() {
  if (wheel.classList.contains('rotated')) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();


  var top = $('.order0').offset().top;
  $('body,html').animate({ scrollTop: top }, 800);
});

let now = new Date();
if (now.getDate() < 10) {
  let date = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  new_date = date[now.getDate() - 1]
}
else {
  new_date = now.getDate()
}
let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
document.getElementById('today').innerHTML = new_date + '.' + month[now.getMonth()] + '.' + now.getFullYear();

var time = 3600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $("#min").html( mins);
  $("#sec").html(secs);
}

$(document).ready(start_timer());
