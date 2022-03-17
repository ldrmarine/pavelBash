$(document).ready(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
    now = new Date();
    var perem = (24 - now.getHours()) * 3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 1,
        "fg_width": 0.04,
        "circle_bg_color": "#f3f5f7",
        "time": {
            "Days": {"text": "Days", "color": "#36d0f8", "show": false},
            "Hours": {"text": "часов", "color": "#36d0f8", "show": true},
            "Minutes": {"text": "минут", "color": "#36d0f8", "show": true},
            "Seconds": {"text": "секунд", "color": "#36d0f8", "show": true}
        }
    });
    $('.gallery').slick({dots: false, infinite: true, speed: 200, fade: false, cssEase: 'linear'});
    $('.reviews').slick({
        dots: false,
        infinite: true,
        speed: 200,
        fade: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });
});
var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{background-color:#000;max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("img/youtube-play-icon.png") no-repeat}';
    document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "img/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function () {
        var a = document.createElement("iframe");
        a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
        a.setAttribute("allowfullscreen", "");
        a.style.width = this.style.width;
        a.style.height = this.style.height;
        this.parentNode.replaceChild(a, this)
    }
}