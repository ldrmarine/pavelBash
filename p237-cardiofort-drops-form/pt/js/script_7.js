!(function($, window, document) {
  'use strict';

  var pluginName = 'carousel',
      defaults = {};

  function Carousel(element, options) {
      this.$element = $(element);
      this.settings = $.extend({}, defaults, options);
      //
      this.prevBtn = this.$element.find(".btn-prev");
      this.nextBtn = this.$element.find(".btn-next");
      this.slides = this.$element.find(".carousel-item");
      //
      this.actualSlide = 0;
      //
      this.prevSlide = this.prevSlide.bind(this);
      this.nextSlide = this.nextSlide.bind(this);
      //
      this.nextSlideAuto = this.nextSlideAuto.bind(this);
      //
      this.init();
  }

  $.extend(Carousel.prototype, {
      init: function() {
        this.showSlider();
        this.switchSlide();
        this.bindEvents();
        this.nextSlideAuto();
      },
      showSlider: function() {
        this.$element.addClass("visible");
      },
      switchSlide: function() {
        this.hideAllSlides();
        this.showActualSlide();
      },
      hideAllSlides: function() {
        this.slides.hide();
      },
      showActualSlide: function() {
        $(this.slides[this.actualSlide]).show();
      },
      bindEvents: function() {
        this.prevBtn.bind("click", this.prevSlide);
        this.nextBtn.bind("click", this.nextSlide);
      },
      prevSlide: function() {
        if(this.actualSlide === 0) this.actualSlide = this.slides.length - 1;
        else --this.actualSlide;

        this.switchSlide();
      },
      nextSlide: function() {
        if(this.actualSlide === this.slides.length - 1) this.actualSlide = 0;
        else ++this.actualSlide;

        this.switchSlide();
      },
      nextSlideAuto: function () {
        let nextButton = this.nextBtn;

        setInterval(function () {
          nextButton.click()
        }, 10000);
      }
  });

  ($.fn.carousel = function(options) {
      return this.each(function() {
          $.data(this, "plugin_" + pluginName) ||
              $.data(this, "plugin_" + pluginName, new Carousel(this, options));
      });
  });

document.addEventListener("DOMContentLoaded",function init() {
      var sidebarQuery = document.getElementsByClassName("sidebar_placeholder desktop");

      sidebarQuery = sidebarQuery.length > 0 ? sidebarQuery : document.getElementsByClassName("container__wrapper--sidebar desktop");

      if (sidebarQuery.length > 0) {
          var sidebar = sidebarQuery[0].lastElementChild;
          if (sidebar != null && typeof  sidebar != "undefined" && window.pageYOffset > sidebar.offsetTop) {
              $(".main-carousel-wrapper").carousel();
          } else if (sidebar == null || typeof  sidebar == "undefined" ){
            return;
          }
         else {
             window.clearTimeout(window.carouselTimeout);
              window.carouselTimeout = setTimeout(function (){init();},1000);
         }
      } else {
          $(".main-carousel-wrapper").carousel();
       }

  });

})(jQuery, window, document);

