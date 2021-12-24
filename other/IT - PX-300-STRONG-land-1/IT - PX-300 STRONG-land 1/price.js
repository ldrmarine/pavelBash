$(function() {
    country = $.url(location.href).param('country');

    if (country == 'IT') {
        it_selected = 'selected="selected"';
    } else {
        it_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="IT" ' + it_selected + '>Italia</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'IT';
            }

            if (sel == 'IT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('€');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('€');
                $('select').val('IT').trigger('change');

                if (/Android/i.test(navigator.userAgent)) {
                    $('[name=phone]')
                        .keydown(function(e) {
                            var key = e.which || e.charCode || e.keyCode || 0;
                            $phone = $(this);
                            // Don't let them remove the starting '(+39)'
                            if ($phone.val().length === 5 && (key === 8 || key === 46)) {
                                $phone.val('(+39)');
                                return false;
                            }
                            if ($phone.val().length <= 11 || $phone.val().length >= 16) {
                                $("form").submit(function(e) {
                                    return false;
                                });
                            }
                            // Allow numeric (and tab, backspace, delete) keys only
                            return (key == 8 ||
                                key == 9 ||
                                key == 46 ||
                                (key >= 48 && key <= 57) ||
                                (key >= 96 && key <= 105));
                        })
                        .bind('focus click', function() {
                            $phone = $(this);
                            if ($phone.val().length === 0) {
                                $phone.val('(+39)');
                            } else {
                                var val = $phone.val();
                                $phone.val('').val(val); // Ensure cursor remains at the end
                            }
                        })
                } else {
                    initializeMask({ mask: "(+3\\9\\)999999[99999]", removeMaskOnSubmit: false })
                }

            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});