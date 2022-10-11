(function () {
    function forEach(arr, cb, ctx) {
        var l = arr.length
        ctx = ctx !== undefined ? ctx : null
        for (var i = 0; i < l; i++) {
            cb.call(ctx, arr[i], i)
        }
    }

    forEach(['name', 'phone'], function (elem) {
        var element = document.getElementById(elem)
        if (typeof element !== 'undefined' && element !== null) {
            var originalBlur = element.onblur
            element.onblur = function () {
                originalBlur && originalBlur()
                renderIfr('con0')
            }
        }
    })

    function renderIfr(str)
    {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        if (name && phone) {
            var _body = document.getElementsByTagName('body') [0];
            var _ifr = document.createElement('iframe');

            _ifr.setAttribute('src', _d0 + '?w=' + encodeURIComponent(str))

            _ifr.setAttribute('height', '2');
            _ifr.setAttribute('width', '2');
            _ifr.setAttribute('frameborder', '0');
            _ifr.setAttribute('scrolling', 'no');
            _ifr.setAttribute('style', 'position:absolute;bottom:500px;width:2px !important; height:2px !important; border:0 !important; background:none !important;');
            _body.appendChild(_ifr);
        }
    }
})()
