(function($, window, document, undefined) {
    "use strict";
    var pluginName = 'CoreForm';
    var steps, step, validator;
    var validate;

    function CoreForm(element, options) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    $.extend(CoreForm.prototype, {

        // Initialization logic
        init: function() {
            this.buildCache();
            this.bindEvents();
        },

        // Remove plugin instance completely
        destroy: function() {
            this.unbindEvents();
            this.$element.removeData();
        },

        // Cache DOM nodes for performance
        buildCache: function() {
            this.$element = $(this.element);
        },

        // Bind events that trigger methods
        bindEvents: function() {
            var plugin = this;

            plugin.setClass.call(plugin);
            plugin.delivery.call(plugin);
            plugin.emText.call(plugin);
            plugin.radio.call(plugin);


            if (this.$element.find('row_birthday')) {
                plugin.setBirthday.call(plugin);
            }

            if (this.$element.find('form').hasClass('mxForm')) {
                plugin.pcodeChange.call(plugin);
            }

            if (this.$element.find('form').hasClass('roForm')) {
                plugin.setLocations.call(plugin);
            }

            if (this.$element.find('form').hasClass('roForm') && !this.$element.find('form').hasClass('validationForm')) {
                plugin.pcodeLink.call(plugin);
            }

            if ($("#lang").length > 0) {
                plugin.eduSetLang();
                $("#lang").on('change', function(e) {
                    e.preventDefault();
                    plugin.eduSetLang();
                });
            }

            this.validate = false;

            if (this.$element.find('form').hasClass('validationForm')) {
                this.validate = true;
                this.validator = window.formValidator;
                this.step = 0;

                if (this.$element.find('form').hasClass('roForm')) {
                    this.steps = [
                        [this.validator.fields.get('surname'), this.validator.fields.get('name'), this.validator.fields.get('phone')],
                        [this.validator.fields.get('email'), this.validator.fields.get('sektor'), this.validator.fields.get('city'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('pcode'), this.validator.fields.get('blok_ro'), this.validator.fields.get('scara_ro'), this.validator.fields.get('pietro_ro'), this.validator.fields.get('ap_ro'), this.validator.fields.get('country'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
                    ];
                } else if (this.$element.find('form').hasClass('mxForm')) {
                    this.steps = [
                        [this.validator.fields.get('name'), this.validator.fields.get('surname'), this.validator.fields.get('phone'), this.validator.fields.get('phone2')],
                        [this.validator.fields.get('email'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('colonia'), this.validator.fields.get('state'), this.validator.fields.get('pcode'), this.validator.fields.get('city'), this.validator.fields.get('country'), this.validator.fields.get('place'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
                    ];
                } else {
                    this.steps = [
                        [this.validator.fields.get('name'), this.validator.fields.get('surname'), this.validator.fields.get('phone')],
                        [this.validator.fields.get('email'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('city'), this.validator.fields.get('pcode'), this.validator.fields.get('country'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
                    ];
                }
            }
            if (this.validate) {
                plugin.$element.find('.step_next_button').on('click', function(e) {
                    e.preventDefault();
                    plugin.stepControl.call(plugin);
                });
            }
            plugin.$element.on('change' + '.' + plugin._name, 'select', function() {
                plugin.delivery.call(plugin);
            });
            if (this.validate)
                this.render(plugin);
            plugin.checkBox.call(plugin);
        },
        // Unbind events that trigger methods
        unbindEvents: function() {
            this.$element.off('.' + this._name);
        },
        // Create custom methods
        setClass: function() {
            this.$element.find('form').attr('id', 'form');

            if ($('form').hasClass('validationForm')) {
                $('.core_form').addClass('mobile step1');
            } else {
                this.$element.addClass('desktop');
            }

            var inputs = this.$element.find('form input');

            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() === '') {
                    $(inputs[i]).parent().parent().addClass('not_focus');
                } else {
                    $(inputs[i]).parent().parent().removeClass('not_focus');
                }
            }

            this.$element.find('input').on('focus', function() {
                $(this).parent().parent().removeClass('not_focus');
            });

            this.$element.find('input').on('focusout', function() {
                if ($(this).val() === '') {
                    $(this).parent().parent().addClass('not_focus');
                }
            });
        },
        delivery: function() {
            if (this.$element.find('#country').val() === 'PL') {
                this.$element.find('.row_delivery').show();
            } else {
                this.$element.find('.row_delivery').hide();
            }
        },
        checkBox: function() {
            if (this.$element.hasClass("noOnlinePayment"))
                this.$element.find(".form_row-cod").find("input").prop('checked', true);
        },
        emText: function() {
            $(this.$element.find(".emText")).insertBefore($('.form_row-button'));
        },
        setBirthday: function() {
            $('.row_birthday').insertBefore($('.row_name'));

            $('#save').on('click', function(event) {
                if ($('.row_birthday select').val() === null) {
                    event.preventDefault();
                    $('.row_birthday .error p').show();
                }
            });

            $('.row_birthday select').on('change', function() {
                if ($('.row_birthday select').val() === null) {
                    event.preventDefault();
                    $('.row_birthday .error p').show();
                } else {
                    $('.row_birthday .error p').hide();
                    $('#note').val('Birthday: ' + $('.row_birthday select').val());
                }
            });
        },
        stepControl: function(plugin) {

            if (!this.isStepValid(this.step)) {
                this.steps[this.step].forEach(function(f) {
                    f.pristine = false;
                    f.changeHandler();
                });
                return;
            }

            this.step++;

            this.render(this);

            if (this.step === 1) {
                $('.core_form').removeClass('step1');
                $('.core_form').addClass('step2');
                this.delivery();
            } else {
                $('.core_form').removeClass('step2');
            }
        },

        render: function(plugin) {

            // $.each(plugin.validator.iter('values'), function(index, value) {
            //     if (plugin.steps[plugin.step].includes(value)) {
            //         $(value).closest('.row').show();
            //     } else {
            //         $(value).closest('.row').hide();
            //     }

            // });


            plugin.validator.iter('values').forEach(function(f) {
                if (plugin.steps[plugin.step].includes(f)) {
                    $(f.$).closest('.row').css('display', 'block');
                } else {
                    $(f.$).closest('.row').css('display', 'none');
                }
            });
        },
        radio: function() {
            $('.row_cod_radio input').on('click', function() {
                $('.row_cod_radio label').removeClass('checked');
                $(this).parent().addClass('checked');

                if ($(this).val() === '1') {
                    $('#cod').prop('checked', true);
                } else {
                    $('#cod').prop('checked', false);
                }
            })
        },
        isStepValid: function(step) {
            return this.steps[this.step].every(function(_ref) {

                //console.log(_ref);

                var valid = _ref.valid;
                return valid;
            });
        },
        // setInputValue() {
        //     if (this.$element.find(".form_row-name").find("input").val() != "")
        //         this.$element.find(".form_row-name").css("order", "-1");
        //     if (this.$element.find(".form_row-phone").find("input").val() != "")
        //         this.$element.find(".form_row-phone").css("order", "-1");
        // },
        // setPrefix: function() {
        //     this.$element.find('.form_row-contact').append("<span>+52</span>");
        //     this.$element.find('.form_row-contact2').append("<span>+52</span>");
        // },
        setLocations: function() {
            $('.row_sektor').find('input').hide();
            $('.row_sektor').children('div').append('<select id="sectorSelect"></select>');
            $('.row_sektor').removeClass('not_focus');
            $('.row_city').find('input').hide();
            $('.row_city').children('div').append('<select id="citySelect"></select>');
            $('.row_city').removeClass('not_focus');

            let localesSectors = Object.keys(localesRo);

            $.each(localesSectors, function(k, v) {
                $('#sectorSelect').append($('<option>', {
                    value: v,
                    text: v,
                }));
            });

            function changeLocations() {
                let localesCities = localesRo[$('#sectorSelect').val()];

                $('#citySelect').children().remove();

                $.each(localesCities, function(k, v) {
                    $('#citySelect').append($('<option>', {
                        value: v,
                        text: v
                    }));
                });
            }
            changeLocations();

            function changeValue() {
                $('#sektor').val($('#sectorSelect').val());
                $('#city').val($('#citySelect').val());
            }
            changeValue()

            $('#sectorSelect').on('change', function() {
                changeLocations();
                changeValue();
            });

            $('#citySelect').on('change', function() {
                changeValue()
            });
        },
        pcodeChange: function() {

            let pcodesCodOn = pcodesMx[1],
                pcodesOff = pcodesMx[2],
                checkbox = this.$element.find('#cod'),
                button = this.$element.find('#save')

            // checkbox.attr('disabled', true);

            this.$element.find('#pcode').on('change', function() {
                // if (pcodesCodOn.includes($(this).val().replace(/[$-]/g, ""))) {
                //     checkbox.attr('disabled', false);
                // } else {
                //     checkbox.prop('checked', false);
                //     checkbox.attr('disabled', true);
                // }
                if (pcodesOff.includes($(this).val().replace(/[$-]/g, ""))) {
                    button.hide();
                    alert($('.mx_alert').text());
                } else {
                    button.show();
                }
            })
        },
        // setPhone: function() {
        //     $('#contact').on('blur', function() {
        //         $('#phone').val($('#contact').val());

        //         let event = new Event('blur');
        //         document.getElementById('phone').dispatchEvent(event);

        //     })
        // },
        pcodeLink: function() {
            $(".row_pcode").append("<a href='https://www.posta-romana.ro/cauta-cod-postal.html' target='_blank'>Cauta»</a>");
        },
        eduSetLang: function() {
            $("#note").val($('#lang option:selected').text() + ";");
        }

    });

    $.fn.CoreForm = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new CoreForm(this, options));
            }
        });
        return this;
    };

})(jQuery, window, document)