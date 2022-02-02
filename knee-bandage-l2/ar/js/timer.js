function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    /*var daysSpan = clock.querySelector(".days");*/
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            hoursSpan.innerHTML = ("00").slice(-2);
            minutesSpan.innerHTML = ("00").slice(-2);
            secondsSpan.innerHTML = ("00").slice(-2);
            clearInterval(timeinterval);
            return true;
        }

        /*daysSpan.innerHTML = t.days;*/
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
let now = new Date();
let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let diff = tomorrow - now; // разница в миллисекундах
var deadlineSec = Math.round(diff / 1000); // преобразуем в секунды
console.log(deadlineSec);
var deadline = new Date(Date.parse(new Date()) + deadlineSec * 1000);
initializeClock('countdown', deadline);