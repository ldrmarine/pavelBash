var yandex = {
    "v1": 51617303,
    "v2": 51617717,
    "v3": 51617747,
    "v4": 51617783,
    "v5": 56727358,
    "v6": 51617813,
    "v7": 51617843,
    "v8": 51617951,
    "v9": 51617996,
    "v10": 51617387,
    "v11": 51617417,
    "v12": 51617669,
    "v13": 51617690,
    "v14": 54157423,
    "v15": 54157417,
    "v16": 54157435,
    "v17": 54157543,
    "v18": 54810877,
    "v19": 56727352,
    "v20": 56727355,
    "v21": 60930718,
    "v22": 67013458,
    "v23": 68575678,
    "v24": 75378094,
    "v25": 77954680,
    "v26": 77954725,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('es', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('es', '')
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