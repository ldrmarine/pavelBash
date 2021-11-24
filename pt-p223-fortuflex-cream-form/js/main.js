document.addEventListener("DOMContentLoaded", function () {
  // Вивід дати (+ час).
  // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
  // postDate( /*'dateFormat', 'ru', false*/ );
  let lang = document.querySelector('html').getAttribute('lang');
  postDate('dd.mm.yyyy', lang, false);
});

function postDate(sa, countryName, isAbbreviated) {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>. 
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

  var sa = sa || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = countryName || 'pl', // Мова для місяців. 
    isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
    localDate = new Date();

  switch (countryName) {
    case 'pl': // Poland
      months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];
      break;
    case 'pt':
      months = ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      break;
  }

  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date-" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
        // format: особливий формать для окремої дати. Додаємo як data-format="фомарт". 
        /// Формати дивитись в switch нижче. dd - числом, day - прописом.

        // Наприклад, <span class="date-1" data-format="dd month yyyy"></span> 
        // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
      } else {
        // Загальний формат виводу дати змінювати ТУТ!
        nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy 
      }
      if (/\btime\b/.test(nodeList[i].className)) {
        nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() + counter * msInDay),
      timeCounter = 0;

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
      }
    }
  }



  function time(nodeList, reverse) {
    var timeArray = [],
      timeStatement = false;

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].className.match(/\btime\b/)) {
        if (nodeList[i].className.match(/\bdate-0\b/)) {
          timeStatement = true;
        }
        timeArray.push(timeRandom(timeStatement));
      }
    }

    if (reverse) timeArray.sort(function (a, b) {
      return b - a;
    });
    else timeArray.sort(function (a, b) {
      return a - b;
    });

    return timeArray;
  }

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
    return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
    var array = [];

    for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60),
        mtemp = timearray[i] % 60,
        hours = htemp < 10 ? "0" + htemp : htemp,
        minutes = mtemp < 10 ? "0" + mtemp : mtemp;
      array.push(hours + ":" + minutes);
    }


    return array;
  }

  function format(date, formatstring) {
    var innerDate = "",
      day = date.getDate(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      fo = formatstring || true;

    switch (fo) {
      case "tom":
        innerDate += day + 1;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        return innerDate;
      case "mm.dd.yyyy":
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "." + year;
        return innerDate;

      case "dd month yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd month":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        return innerDate;
      case "month":
        innerDate += months[month - 1].toLowerCase();
        return innerDate;

      case "day dd, month yyyy":
        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        innerDate += days[new Date(year, month - 1, day).getDay()];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd/mm/yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "/";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "/" + year;
        return innerDate;

      case "dd-mm-yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "-";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "-" + year;
        return innerDate;

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "yyyy":
        innerDate += year;
        return innerDate;

      default:
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "." + year;
        return innerDate;
    }
  }
};

var par = location.hash.slice(1).split("~"),
  parl = par.length;
if (parl > 2 && (isp = par[4].replace(/\+/g, " ")), "vibrate" in navigator) var vibr = 1;
else vibr = 0;
var count = 1;

var url;
var img = $('img')[0];

if ($(img).attr('src').indexOf('cdn') !== -1) {
  url = $(img).attr('src').split('/').slice(0, 3).join('/') + '/';
} else {
  url = '';
}
$(function () {
  $(".try").click(function () {
    if (count < 2) $(this).attr('src', '' + url + 'images/download.png'), count++, setTimeout(function () {
      document.getElementById("success02").className += " animate", document.getElementById("successtip02").className += " animateSuccessTip", document.getElementById("modal02").className += " visible", document.getElementById("cntVal"), document.querySelector(".sweet-overlay").style.display = "block"
    }, 800);
    else {
      var e = document.getElementById("discount");
      $(this).replaceWith(e), $(e).addClass("show"), setTimeout(function () {
        resultWrapper.style.display = "block"
      }, 1e3), setTimeout(function () {
        $("#boxes").slideUp(), $(".order_block").slideDown(), start_timer()
      }, 3500)
    }
  })
});
var counter = 1;

function hidemodal02() {
  vibr > 0 && navigator.vibrate(70), document.getElementById("modal02").classList.remove("visible"), document.querySelector(".sweet-overlay").style.display = "none"
}
$(document).ready(function () {
  $("#update").on("click", function () {
    1 == counter && (counter++, $("#cntVal").html(function (e, t) {
      return +t - 1
    }))
  })
});
var resultWrapper = document.querySelector(".spin-result-wrapper"),
  wheel = document.querySelector(".wheel-img");

function spin() {
  wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout(function () {
    resultWrapper.style.display = "block"
  }, 8e3), setTimeout(function () {
    $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
  }, 1e4), wheel.classList.add("rotated"))
}
$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  var t = $("#roulette").offset().top;
  $("body,html").animate({
    scrollTop: t
  }, 800)
});
var intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
}

$("a[href='#forma']").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#forma").offset().top)
  }, 2000);
});