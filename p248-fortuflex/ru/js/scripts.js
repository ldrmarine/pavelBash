$(document).ready(function () {

  // Mobile menu trigger
  // .header_top_menu
  var HTmenuTrigger = $(".js-htmenu-mobile")
  var HTmenuList = $(".js-htmenu-list")
  HTmenuTrigger.click(function () {
    HTmenuList.slideToggle("fast");
    HTmenuTrigger.toggleClass("header_top_menu-mobile--active");
  });
  $(window).resize(function () {
    if ($(window).width() < 620) {
      if (HTmenuTrigger.is(":hidden")) {
        HTmenuTrigger.css('display', '');
      }
    } else {
      HTmenuList.css('display', '');
      HTmenuTrigger.removeClass("header_top_menu-mobile--active");
    }
  });
  // .header_bottom_menu
  var HBmenuTrigger = $(".js-hbmenu-mobile")
  var HBmenuList = $(".js-hbmenu-list")
  HBmenuTrigger.click(function () {
    HBmenuList.slideToggle("fast");
    HBmenuTrigger.toggleClass("header_bottom_menu-mobile--active");
  });
  $(window).resize(function () {
    if ($(window).width() < 820) {
      if (HBmenuTrigger.is(":hidden")) {}
    } else {
      HBmenuList.css('display', '');
      HBmenuTrigger.removeClass("header_bottom_menu-mobile--active");
    }
  });
  // Mobile menu trigger.end

  // Breaking News Popup
  var breakingPopupBody = $(".js-breaking_popup")
  var breakingPopupClose = $(".js-breaking_popup-close")
  setTimeout(function () {
    breakingPopupBody.slideDown('fast')
  }, 18000000);

  breakingPopupClose.click(function () {
    breakingPopupBody.slideUp('fast')
  });
  // Breaking News Popup.end

});