// ;
// (function($, window, document, undefined) {
//     "use strict";
//     var pluginName = 'form_d1m2';
//     var steps, step, validator;
//     var validatie;

//     function Form_d1m2(element, options) {
//         this.element = element;
//         this._name = pluginName;
//         this.init();
//     }

//     $.extend(Form_d1m2.prototype, {

//         // Initialization logic
//         init: function() {
//             this.buildCache();
//             this.bindEvents();
//         },

//         // Remove plugin instance completely
//         destroy: function() {
//             this.unbindEvents();
//             this.$element.removeData();
//         },

//         // Cache DOM nodes for performance
//         buildCache: function() {
//             this.$element = $(this.element);
//         },

//         // Bind events that trigger methods
//         bindEvents: function() {

//             $('#form_type').wrap("<div></div>");

//             var plugin = this;
//             plugin.setClass.call(plugin);
//             plugin.deliveryForm.call(plugin);

//             plugin.emText.call(plugin);

//             if (this.$element.find('form_row-birthday')) {
//                 plugin.setBirthday.call(plugin);
//             }

//             if (this.$element.find('form').hasClass('mxForm')) {
//                 plugin.setPrefix.call(plugin);
//                 plugin.pcodeChange.call(plugin);
//                 plugin.setPhone.call(plugin);
//             }

//             if (this.$element.find('form').hasClass('roForm')) {
//                 plugin.setLocations.call(plugin);
//             }

//             if (this.$element.find('form').hasClass('roForm') && !this.$element.find('form').hasClass('validationForm')) {
//                 plugin.pcodeLink.call(plugin);
//             }

//             this.validate = false;

//             if (this.$element.find('form').hasClass('validationForm')) {
//                 this.validate = true;
//                 this.validator = window.formValidator;
//                 this.step = 0;

//                 if (this.$element.find('form').hasClass('roForm')) {
//                     this.steps = [
//                         [this.validator.fields.get('surname'), this.validator.fields.get('name'), this.validator.fields.get('phone')],
//                         [this.validator.fields.get('email'), this.validator.fields.get('sektor'), this.validator.fields.get('city'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('pcode'), this.validator.fields.get('blok_ro'), this.validator.fields.get('scara_ro'), this.validator.fields.get('pietro_ro'), this.validator.fields.get('ap_ro'), this.validator.fields.get('country'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
//                     ];
//                 } else if (this.$element.find('form').hasClass('mxForm')) {
//                     this.steps = [
//                         [this.validator.fields.get('name'), this.validator.fields.get('surname'), this.validator.fields.get('contact'), this.validator.fields.get('contact2')],
//                         [this.validator.fields.get('email'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('colonia'), this.validator.fields.get('state'), this.validator.fields.get('pcode'), this.validator.fields.get('city'), this.validator.fields.get('country'), this.validator.fields.get('place'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
//                     ];
//                 } else {
//                     this.steps = [
//                         [this.validator.fields.get('name'), this.validator.fields.get('surname'), this.validator.fields.get('phone')],
//                         [this.validator.fields.get('email'), this.validator.fields.get('address'), this.validator.fields.get('number'), this.validator.fields.get('local'), this.validator.fields.get('city'), this.validator.fields.get('pcode'), this.validator.fields.get('country'), this.validator.fields.get('note2'), this.validator.fields.get('cod'), this.validator.fields.get('save')]
//                     ];
//                 }
//             }
//             if (this.validate) {
//                 plugin.$element.find('.next').on('click', function(e) {
//                     e.preventDefault();
//                     plugin.stepControl.call(plugin);
//                 });
//             }
//             plugin.$element.on('change' + '.' + plugin._name, 'select', function() {
//                 plugin.deliveryForm.call(plugin);
//             });
//             if (this.validate)
//                 this.render(plugin);
//             plugin.checkBox.call(plugin);
//         },
//         // Unbind events that trigger methods
//         unbindEvents: function() {
//             this.$element.off('.' + this._name);
//         },
//         // Create custom methods
//         deliveryForm: function() {
//             if (this.$element.find('#country').val() === 'PL') {
//                 this.$element.find('.form_row-deliveryForm').css('display', 'flex');
//             } else {
//                 this.$element.find('.form_row-deliveryForm').css('display', 'none');
//             }
//         },
//         checkBox: function() {
//             if (this.$element.hasClass("noOnlinePayment"))
//                 this.$element.find(".form_row-cod").find("input").prop('checked', true);
//         },
//         emText: function() {
//             $(this.$element.find(".emText")).insertBefore($('.form_row-button'));
//         },
//         setClass: function() {
//             var labels = $('form div div label');
//             for (var i = 0; i < labels.length; i++) {
//                 this.$element.find(labels[i]).parent().addClass('form_row');
//                 this.$element.find(labels[i]).parent().addClass('form_row-' + $(labels[i]).attr('for'));
//                 this.$element.find(labels[i]).siblings('input').attr('id', $(labels[i]).attr('for'));
//             }

//             this.$element.find('form').attr('id', 'form');
//             this.$element.find('#save').parent().addClass('form_row form_row-button');

//             if (this.$element.find('form').hasClass('validationForm')) {
//                 this.$element.addClass('mobileForm step1');
//             }

//             var inputs = this.$element.find('form input');

//             for (var i = 0; i < inputs.length; i++) {
//                 if ($(inputs[i]).val() === '') {
//                     $(inputs[i]).parent().addClass('not_focus');
//                 } else {
//                     $(inputs[i]).parent().removeClass('not_focus');
//                 }
//             }

//             this.$element.find('input').on('focus', function() {
//                 $(this).parent().removeClass('not_focus');
//             });

//             this.$element.find('input').on('focusout', function() {
//                 if ($(this).val() === '') {
//                     $(this).parent().addClass('not_focus');
//                 }
//             });
//         },
//         setBirthday: function() {
//             $('.form_row-birthday').insertBefore($('.form_row-name'));

//             $('#save').on('click', function(event) {
//                 if ($('.form_row-birthday select').val() === null) {
//                     event.preventDefault();
//                     $('.form_row-birthday .error p').show();
//                 }
//             });

//             $('.form_row-birthday select').on('change', function() {
//                 if ($('.form_row-birthday select').val() === null) {
//                     event.preventDefault();
//                     $('.form_row-birthday .error p').show();
//                 } else {
//                     $('.form_row-birthday .error p').hide();
//                     $('#note').val('Birthday: ' + $('.form_row-birthday select').val());
//                 }
//             });
//         },
//         stepControl: function(plugin) {

//             if (!this.isStepValid(this.step)) {
//                 this.steps[this.step].forEach(function(f) {
//                     f.pristine = false;
//                     f.changeHandler();
//                 });
//                 return;
//             }

//             this.step++;

//             this.render(this);

//             if (this.step === 1) {
//                 this.$element.removeClass('step1');
//                 this.$element.addClass('step2');
//                 this.deliveryForm();
//             } else {
//                 this.$element.removeClass('step2');
//             }
//         },
//         render: function(plugin) {
//             plugin.validator.iter('values').forEach(function(f) {
//                 if (plugin.steps[plugin.step].includes(f))
//                     f.$.parentNode.style.display = "flex";
//                 else
//                     f.$.parentNode.style.display = "none";
//             });
//         },
//         isStepValid: function(step) {
//             return this.steps[this.step].every(function(_ref) {
//                 var valid = _ref.valid;
//                 return valid;
//             });
//         },
//         setInputValue() {
//             if (this.$element.find(".form_row-name").find("input").val() != "")
//                 this.$element.find(".form_row-name").css("order", "-1");
//             if (this.$element.find(".form_row-phone").find("input").val() != "")
//                 this.$element.find(".form_row-phone").css("order", "-1");
//         },
//         setPrefix: function() {
//             this.$element.find('.form_row-contact').append("<span>+52</span>");
//             this.$element.find('.form_row-contact2').append("<span>+52</span>");
//         },
//         setLocations: function() {
//             $('.form_row-sektor').children('input').hide();
//             $('.form_row-sektor').append('<select id="sectorSelect"></select>');
//             $('.form_row-sektor').removeClass('not_focus');
//             $('.form_row-city').children('input').hide();
//             $('.form_row-city').append('<select id="citySelect"></select>');
//             $('.form_row-city').removeClass('not_focus');

//             let localesSectors = Object.keys(localesRo);

//             $.each(localesSectors, function(k, v) {
//                 $('#sectorSelect').append($('<option>', {
//                     value: v,
//                     text: v,
//                 }));
//             });

//             function changeLocations() {
//                 let localesCities = localesRo[$('#sectorSelect').val()];

//                 $('#citySelect').children().remove();

//                 $.each(localesCities, function(k, v) {
//                     $('#citySelect').append($('<option>', {
//                         value: v,
//                         text: v
//                     }));
//                 });
//             }
//             changeLocations();

//             function changeValue() {
//                 $('#sektor').val($('#sectorSelect').val());
//                 $('#city').val($('#citySelect').val());
//             }
//             changeValue()

//             $('#sectorSelect').on('change', function() {
//                 changeLocations();
//                 changeValue();
//             });

//             $('#citySelect').on('change', function() {
//                 changeValue()
//             });
//         },
//         pcodeChange: function() {

//             let pcodesCodOn = pcodesMx[1],
//                 pcodesOff = pcodesMx[2],
//                 checkbox = this.$element.find('#cod'),
//                 button = this.$element.find('#save')

//             checkbox.attr('disabled', true);

//             this.$element.find('#pcode').on('change', function() {
//                 if (pcodesCodOn.includes($(this).val().replace(/[$-]/g, ""))) {
//                     checkbox.attr('disabled', false);
//                 } else {
//                     checkbox.prop('checked', false);
//                     checkbox.attr('disabled', true);
//                 }
//                 if (pcodesOff.includes($(this).val().replace(/[$-]/g, ""))) {
//                     button.hide();
//                 } else {
//                     button.show();
//                 }
//             })
//         },
//         setPhone: function() {
//             $('#contact').on('blur', function() {
//                 $('#phone').val($('#contact').val());

//                 let event = new Event('blur');
//                 document.getElementById('phone').dispatchEvent(event);

//             })
//         },
//         pcodeLink: function() {
//             $(".form_row-pcode").append("<a href='https://www.posta-romana.ro/cauta-cod-postal.html' target='_blank'>Cauta»</a>");
//         }

//     });

//     $.fn.form_d1m2 = function(options) {
//         this.each(function() {
//             if (!$.data(this, "plugin_" + pluginName)) {
//                 $.data(this, "plugin_" + pluginName, new Form_d1m2(this, options));
//             }
//         });
//         return this;
//     };

// })(jQuery, window, document)