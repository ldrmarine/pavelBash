document.addEventListener("DOMContentLoaded", function(event) {
    //timer

    var fullTime = new Date().getTime() + 13500000; //1.5 дня
    $('.countdown-container').countdown(fullTime, function(event) {
        $(this).html(event.strftime(

            '<div class="unit hours">' +
            '<div class="value">%H</div>' +
            '<div class="desc">:</div>' +
            '</div>' +

            '<div class="unit minutes">' +
            '<div class="value">%M</div>' +
            '<div class="desc">:</div>' +
            '</div>' +

            '<div class="unit seconds">' +
            '<div class="value">%S</div>' +
            '<div class="desc"></div>' +
            '</div>'));
    });

    //current date

    // function getCurrentDate() {
    //     var today = new Date();
    //     var curDay = today.getDate();
    //     var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    //     var curMonth = months[today.getMonth()];
    //     var curYear = today.getFullYear();

    //     today = curMonth + " " + curDay + ", " + curYear;
    //     var output = document.getElementById('currentDate');
    //     output.innerText = today;
    // }
    // getCurrentDate();

});

