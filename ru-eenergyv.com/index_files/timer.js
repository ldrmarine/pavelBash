$(document).ready(function(){
    GetCount();
});

var today = new Date(),
    tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
function GetCount() {
    dateNow = new Date();
    amount = tomorrow.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('.timer .hours').html('00');
        $('.timer .mins').html('00');
        $('.timer .secs').html('00');
    } else {
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        hours1 = Math.floor(hours / 10);
        hours2 = hours % 10;
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        mins1 = Math.floor(mins / 10);
        mins2 = mins % 10;
        amount = amount % 60;
        secs = Math.floor(amount);
        secs1 = Math.floor(secs / 10);
        secs2 = secs % 10;

        $('.timer .hours .hours1').html(hours1);
        $('.timer .hours .hours2').html(hours2);
        $('.timer .mins .mins1').html(mins1);
        $('.timer .mins .mins2').html(mins2);
        $('.timer .secs1').html(secs1);
        $('.timer .secs2').html(secs2);

        setTimeout("GetCount()", 1000);
    }
}