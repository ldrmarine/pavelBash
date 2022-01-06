!(function($, window, document) {
    'use strict';

    var pluginName = 'commentPopUp',
        defaults = {
            nextArrow: '<a class="next btn-bar buttons"></a>',
            prevArrow: '<a class="prev btn-bar buttons"></a>',
            // wrapperArrows: '.btn-bar .buttons'
        };

    function CommentPopUp(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }
    $.extend(CommentPopUp.prototype, {
        init: function() {
            this.buildCache();

            this.$element.find('.slides').slick({
                dots: false,
                appendArrows: this.settings.wrapperArrows,
                nextArrow: this.settings.nextArrow,
                prevArrow: this.settings.prevArrow,
                fade: true,
            });

            this.$element.css('opacity', 1);
        },
        buildCache: function () {
            this.$element = $(this.element);
        },
    });
    ($.fn.commentPopUp = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + pluginName) ||
                $.data(this, "plugin_" + pluginName, new CommentPopUp(this, options));
        });
    });
})(jQuery, window, document);
