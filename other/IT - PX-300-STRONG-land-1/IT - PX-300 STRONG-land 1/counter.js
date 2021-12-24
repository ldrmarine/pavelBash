var yandex = {
    "v1": 51618023,
    "v2": 51618860,
    "v3": 51618881,
    "v4": 51618917,
    "v5": 51618968,
    "v6": 51619007,
    "v7": 51619046,
    "v8": 51619094,
    "v9": 51619394,
    "v10": 51618050,
    "v11": 51618089,
    "v12": 51618650,
    "v13": 51618689,
    "v14": 51618803,
    "v15": 54157411,
    "v16": 54157426,
    "v17": 54157540,
    "v18": 56727385,
    "v19": 60930745,
    "v20": 65967010,
    "v21": 68575687,
    "v22": 69591934,
    "v23": 69548590
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('it', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('it', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});