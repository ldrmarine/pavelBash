(function (a, b) {
  function c(a) {
    return a
  }

  function d(a) {
    return decodeURIComponent(a.replace(e, " "))
  }
  var e = /\+/g;
  a.cookie = function (e, f, g) {
    if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(f)) || null == f)) {
      if (g = a.extend({}, a.cookie.defaults, g), null == f && (g.expires = -1), "number" == typeof g.expires) {
        var h = g.expires,
          j = g.expires = new Date;
        j.setDate(j.getDate() + h)
      }
      return f += "", b.cookie = [encodeURIComponent(e), "=", g.raw ? f : encodeURIComponent(f), g.expires ? "; expires=" + g.expires.toUTCString() : "", g.path ? "; path=" + g.path : "", g.domain ? "; domain=" + g.domain : "", g.secure ? "; secure" : ""].join("")
    }
    g = f || a.cookie.defaults || {};
    for (var k, l = g.raw ? c : d, m = b.cookie.split("; "), n = 0; k = m[n] && m[n].split("="); n++)
      if (l(k.shift()) === e) return l(k.join("="));
    return null
  }, a.cookie.defaults = {}
})(jQuery, document),
function (a) {
  var b = function (b) {
      var c = "randDate" + b;
      if ("undefined" != typeof localStorage) {
        var d = localStorage.getItem(c);
        return d ? d : (d = new Date().getTime() - 1e3 * (60 * (60 * (24 * b))), localStorage.setItem(c, d), d)
      }
      var d = a.cookie(c);
      if (d) return d;
      var d = new Date().getTime() - 1e3 * (60 * (60 * (24 * b)));
      return a.cookie(c, d, {
        expires: 1
      }), d
    },
    c = 29,
    d = function (a) {
      switch (a) {
        case 1:
          return window.l_loc.l_pl57;
          break;
        case 2:
          return window.l_loc.l_pl58;
          break;
        case 3:
          return window.l_loc.l_pl59;
          break;
        case 4:
          return window.l_loc.l_pl60;
          break;
        case 5:
          return window.l_loc.l_pl61;
          break;
        case 6:
          return window.l_loc.l_pl62;
          break;
        case 7:
          return window.l_loc.l_pl63;
          break;
        case 8:
          return window.l_loc.l_pl64;
          break;
        case 9:
          return window.l_loc.l_pl65;
          break;
        case 10:
          return window.l_loc.l_pl66;
          break;
        case 11:
          return window.l_loc.l_pl67;
          break;
        case 12:
          return window.l_loc.l_pl68;
      }
    },
    e = function (a) {
      switch (a) {
        case 0:
          return window.l_loc.l_pl69;
          break;
        case 1:
          return window.l_loc.l_pl70;
          break;
        case 2:
          return window.l_loc.l_pl71;
          break;
        case 3:
          return window.l_loc.l_pl72;
          break;
        case 4:
          return window.l_loc.l_pl73;
          break;
        case 5:
          return window.l_loc.l_pl74;
          break;
        case 6:
          return window.l_loc.l_pl75;
      }
    },
    f = function (b, c) {
      var f = {
        year: b.getFullYear(),
        monthF: b.getMonth() + 1,
        monthI: b.getMonth() + 1,
        monthS: d(b.getMonth() + 1),
        dayF: b.getDate(),
        dayI: b.getDate(),
        dayS: e(b.getDay()),
        hourF: b.getHours(),
        minF: b.getMinutes(),
        secF: b.getSeconds(),
        weekDayF: b.getDay()
      };
      return a.each(f, function (a, b) {
        "dayI" != a && "monthI" != a && 10 > b && (b = "0" + b), c = c.replace(a, b)
      }), c
    },
    g = {
      init: function () {
        return this
      },
      rstart: function () {
        return this.each(function () {
          var d = a(this).attr("format"),
            e = a(this).attr("daysago");
          e || (e = c);
          var g = new Date(parseInt(b(e)));
          d ? a(this).html(f(g, d)) : a(this).html(f(g, "dayI monthS year"))
        })
      },
      rdate: function () {
        return this.each(function (d) {
          var e = a(this).attr("format"),
            g = a(this).attr("daysago"),
            h = parseFloat(a(this).attr("dayindex"));
          g || (g = c), h || (h = 0);
          var i = new Date(parseInt(b(g))),
            j = (16 <= d ? 16 : d) + h,
            k = new Date(i.getTime() + 60 * (j * (12 + j) * (60 + d)) * (1e3 + d));
          e ? a(this).html(f(k, e)) : a(this).html(f(k, "dayF.monthF.year hourF:minF"))
        })
      },
      ryear: function () {
        return this.each(function () {
          var b = a(this).data("decrease"),
            c = b && 0 < b && b === parseInt(+b, 10) && !isNaN(parseInt(b)) ? b : 0;
          a(this).html(new Date().getFullYear() - c)
        })
      },
      rnow: function () {
        return this.each(function () {
          var b = a(this).attr("format"),
            c = new Date;
          b ? a(this).html(f(c, b)) : a(this).html(f(c, "dayI monthS"))
        })
      }
    };
  a.fn.randDate = function (b) {
    if (g[b]) return g[b].apply(this, Array.prototype.slice.call(arguments, 1));
    return "object" != typeof b && b ? void a.error("\u041C\u0435\u0442\u043E\u0434 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C " + b + " \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043B\u044F jQuery.randDate") : g.init.apply(this, arguments)
  }
}(jQuery), $(function () {
  $(".rstart, .startdate").randDate("rstart"), $(".rdate, .ypdate, .randdate").randDate("rdate"), $(".ryear, .nowyear").randDate("ryear"), $(".rnow, .nowdate").randDate("rnow")
});