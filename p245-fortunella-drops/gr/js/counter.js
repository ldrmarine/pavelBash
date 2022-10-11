var yandex = {
    "v6": 66192375,
    "v7": 67199806,
    "v8": 67209262,
    "v9": 68493835,
    "v10": 68611546,
	"v11": 70776109,
	"v12": 70187623,
	"v13": 70628530,
    "v14": 70772257,
    "v16": 70907950,
    "v17": 71354989,
    "v18": 71946256,
    "v19": 72094858,
    "v20": 72197191,
    "v21": 72227899,
    "v23": 72445228,
    "v24": 73415698,
    "v25": 74992942,
    "v26": 74079997,
    "v27": 75829312,
    "v28": 78163771,
    "v29": 78452049,
	"v30": 81159139,
	"v31": 82207168,
	"v32": 82309573,
	"v33": 82076635,
    "v34": 85816770,
    "v36": 86248748,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('gr', '').replace('39', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('gr', '')
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