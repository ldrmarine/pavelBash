var PopUpWindowUrl = document.getElementById('exitRedirect').innerText;
var RedirectUrl = document.getElementById('exitRedirect').innerText;
var exitsplashmessage = document.getElementById('exitText').innerText;

function DisableExitTraffic() {
    PreventExitSplash = true;
}

function EnableExitTraffic() {
    PreventExitSplash = false;
}

function addLoadEvent(func) {
    var oldonload = window.onload;


    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function addClickEvent(a, i, func) {
    if (typeof a[i].onclick != 'function') {
        a[i].onclick = func;
    }
}
theBody = document.body;
if (!theBody) {
    theBody = document.getElementById("body");
    if (!theBody) {
        theBody = document.getElementsByTagName("body")[0];
    }
}



setTimeout('tryredir()', 50);
setInterval(function() { if (!alreadyRedir() || PreventExitSplash) EnableExitTraffic();
    else DisableExitTraffic(); }, 50);

function tryredir() {
    if (redirnow) {

        document.location = RedirectUrl;
    } else {
        setTimeout('tryredir()', 50);
    }
}

function alreadyRedir() {
    return redirnow;
}
var PreventExitSplash = false;
var LightwindowOpening = false;
var redirnow = false;

function DisplayExitSplashOpera() {

    if (PreventExitSplash == false && !alreadyRedir()) {
        window.scrollTo(0, 0);

        window.alert(exitsplashmessage);
        PreventExitSplash = true;
        document.location.href = RedirectUrl;
        redirnow = true;

        if (typeof tls1 == 'function') tls1("lock_exit");


        if (window.event) {
            window.event.returnValue = exitsplashmessage;
        } else {

        }
        return exitsplashmessage;
    }
}

var showImgBlock = true;

function DisplayExitSplash() {
    if(!cookieExists("lock_exit")||getCookie("lock_exit") === "true") {

    if (PreventExitSplash == false && !alreadyRedir()) {
            window.scrollTo(0, 0);
            if (showImgBlock == true) {

                var msg_br = exitsplashmessage.replace(/\n/g, "<br>")
                var txt_img = document.getElementById("exit_div_alert1")
                txt_img.innerHTML = msg_br;

                var txt_img = document.getElementById("exit_div_alert3")
                txt_img.innerHTML = msg_br;

                window.scrollTo(0, 0);

                document.getElementById("ExitBackDiv").style.visibility = "visible";
                document.getElementById("ExitDiv").style.visibility = "visible";
                document.getElementById("ExitBackDiv").style.display = "block";
                document.getElementById("ExitDiv").style.display = "block";

                if (typeof tls1 == 'function') tls1("lock_exit");
            }

            var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);

            document.cookie = "was_lock_exit=true";
            PreventExitSplash = true;
            redirnow = true;

            if (window.event) {
                window.event.returnValue = exitsplashmessage;
            }
            return exitsplashmessage;
        }
    }
}
var a = document.getElementsByTagName('A');
for (var i = 0; i < a.length; i++) {
    if (a[i].target !== '_blank') {
        addClickEvent(a, i, function() {
            PreventExitSplash = true;
        });
    } else if (a[i].href.indexOf('http:/') >= 0) {
        addClickEvent(a, i, function() {
            PreventExitSplash = false;
        });
    }
}
a = document.getElementsByTagName('FORM');
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('submit', function() {
        PreventExitSplash = true;
    });
    addClickEvent(a, i, function(e) {
        PreventExitSplash = true;
    });
}

disablelinksfunc = function() {
    var a = document.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            addClickEvent(a, i, function() {
                PreventExitSplash = true;
            });
        } else {
            addClickEvent(a, i, function() {
                PreventExitSplash = false;
            });
        }
    }
    a = document.getElementsByTagName('FORM');
    for (var i = 0; i < a.length; i++) {
        addClickEvent(a, i, function(e) {
            PreventExitSplash = true;
        });
    }

}
hideexitcancelbuttonimage = function() {
    document.getElementById('ExitCancelButtonImageDiv').style.display = 'none';
}
StopExitImpactAudio = function() {
    var esDiv = document.getElementById('ExitSplashDiv');
    var esiaDiv = document.getElementById('exitsplashimpactaudio');
    esDiv.removeChild(esiaDiv);
}

function cookieExists(name) {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

setTimeout(function() {

addLoadEvent(disablelinksfunc);

disableformsfunc = function() {
    var f = document.getElementsByTagName('FORM');
    for (var i = 0; i < f.length; i++) {}
}
addLoadEvent(disableformsfunc);

if (window.navigator.appName == "Opera") {
    window.onbeforeunload = DisplayExitSplashOpera;
    document.getElementsByTagName("body")[0].onunload = DisplayExitSplashOpera;
} else {
        window.onbeforeunload = DisplayExitSplash;
        document.getElementsByTagName("body")[0].onbeforeunload = DisplayExitSplash;
   
}

}, 6000)


var showImgBlock = true;

(function() {
    var __imgDiv = document.createElement('div');
    __imgDiv.style.width = '1px';
    __imgDiv.style.height = '1px';
    __imgDiv.style.overflow = 'hidden';
    document.body.appendChild(__imgDiv);

    for (var i = 0; i < window.__images.length; i++) {
        var __tempImg = document.createElement('img');
        __tempImg.src = window.__images[i];
        __imgDiv.appendChild(__tempImg);
    }
})()
$(document).ready(function() {
    var buttonElement = document.getElementById("sbutton");
    if (buttonElement != null) {
        document.getElementById("sbutton").onclick = function() {
            PreventExitSplash = true;
            return true;
        };
    } else {
        buttonElement = document.getElementById("ssbutton");
        if (buttonElement != null) {
            document.getElementById("ssbutton").onclick = function() {
                PreventExitSplash = true;
                return true;
            };
        }
    }
});
