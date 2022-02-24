
$(document).ready(function () {
	
	


//    Настройки таймера и акции
    var timerdate = new Date();
    var nextdate = new Date();

    var curr_day = timerdate.getDate();
    var curr_hrs = timerdate.getHours();
    var curr_min = timerdate.getMinutes();
    var curr_sec = timerdate.getSeconds();

    var sec = 59 - curr_sec;
    var min = 59 - curr_min;
    var hrs = 23 - curr_hrs;
    var days = (curr_day + 0) - curr_day;

    var timer = setInterval(function () {

        sec--;

        if (sec == -1) {
            sec = 59;
            min--;
        }

        if (min == -1) {
            min = 59;
            hrs--;
        }

        if (hrs == -1) {
            hrs = 23;
            days--;
        }

        if (days == -1) {
            days = 30; //без учёта месяца года
        }
        
        days = days.toString();
        hrs = hrs.toString();
        min = min.toString();
        sec = sec.toString();
        
        if (hrs.length < 2){
            hrs = '0' + hrs;
        }
        if (days.length < 2){
            days = '0' + days;
        }
        if (min.length < 2){
            min = '0' + min;
        }
        if (sec.length < 2){
            sec = '0' + sec;
        }
        
        var daysArray = days.split("");
        var hrsArray = hrs.split("");
        var minArray = min.split("");
        var secArray = sec.split("");

        $('.timer-sec1').text(sec[0]);
        $('.timer-sec2').text(sec[1]);
        
        $('.timer-min1').text(min[0]);
        $('.timer-min2').text(min[1]);
        
        $('.timer-hrs1').text(hrs[0]);
        $('.timer-hrs2').text(hrs[1]);
        
        $('.timer-days1').text(days[0]);
        $('.timer-daysc2').text(days[1]);


    }, 1000);
   
    
});

