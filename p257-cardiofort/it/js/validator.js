$('<div class="error-box"></div>').insertAfter('input[name="fio"]');
$('<div class="error-box"></div>').insertAfter('input[name="name"]');
$('<div class="error-box"></div>').insertAfter('input[name="phone"]');
$('input[name="fio"]').attr("required", "");
$('input[name="name"]').attr("required", "");
$('input[name="phone"]').attr("required", "");
$('input[name="phone"]').addClass('phone').prop('type', 'tel');
$('form').addClass('intlTelInput');

if (paramData1 != '') {
  $('form').attr("action", $('form').attr("action") + "&data1=" + paramData1);
}

var languageError = {
  "RU": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "CZ": {
    "name": "Špatně napsané jméno",
    "noPhone": "Nenapsali jste telefonní číslo",
    "errorPhone": "Neplatné telefonní číslo"
  },
  "SK": {
    "name": "Špatně napsané jméno",
    "noPhone": "Nenapsali jste telefonní číslo",
    "errorPhone": "Neplatné telefonní číslo"
  },
  "LT": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "BG": {
    "name": "Неправилно попълнено име",
    "noPhone": "Вие не сте попълнили телефон",
    "errorPhone": "Невалиден телефонен номер"
  },
  "ES": {
    "name": "Nombre no válido",
    "noPhone": "Usted no cargar en el teléfono",
    "errorPhone": "Inválida Teléfono lleno"
  },
  "EN": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "IT": {
    "name": "Il campo \"nome\" non è compilato correttamente",
    "noPhone": "Non hai compilato un numero di telefono",
    "errorPhone": "Il campo con il numero di telefono è sbagliato"
  },
  "MY": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "MS": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "TH": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "SG": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "DE": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "AT": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "GR": {
    "name": "Το πεδίο δεν έχει συμπληρώθει με το σωστό όνομα",
    "noPhone": "Δεν πληκτρολογήσατε τον αριθμό του κινητού σας",
    "errorPhone": "Πληκτρολογήσατε έναν μη έγκυρο αριθμό"
  },
  "PL": {
    "name": "Niepoprawnie zapełnione imię",
    "noPhone": "Nie podano numeru telefonu",
    "errorPhone": "Niepoprawnie zapełniony numer telefonu"
  },
  "RO": {
    "name": "Nu ați indicat corect numele, prenumele",
    "noPhone": "Nu ați indicat numărul de telefon",
    "errorPhone": "Număr de telefon incorect"
  },
  "MD": {
    "name": "Неверно заполнено имя",
    "noPhone": "Вы не заполнили телефон",
    "errorPhone": "Неверно заполнен номер телефона"
  },
  "SE": {
    "name": "Felaktigt namn",
    "noPhone": "Du har inte fyllt telefonnummer",
    "errorPhone": "Felaktigt telefonnummer"
  },
  "CH": {
    "name": "Der Name ist falsch eingegeben",
    "noPhone": "Sie haben die Telefonnummer nicht ausgefüllt",
    "errorPhone": "Die Telefonnummer ist falsch eingegeben"
  },
  "NO": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "HU": {
    "name": "'nev' a nev helytelenul van kitoltve",
    "noPhone": "'nincs telefon' nem irta be a telefon szamat",
    "errorPhone": "'telefonszam hiba' Helytelen telefonszam"
  },
  "SI": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "PT": {
    "name": "O Nome não foi preenchido corretamente",
    "noPhone": "Você não adicionou o telefone",
    "errorPhone": "O número de telefone não foi preenchido corretamente"
  },
  "BR": {
    "name": "O Nome não foi preenchido corretamente",
    "noPhone": "Você não adicionou o telefone",
    "errorPhone": "O número de telefone não foi preenchido corretamente"
  },
  "FR": {
    "name": "Le nom est mal renseigné",
    "noPhone": "Vous n'avez pas enregistré Votre numéro de téléphone",
    "errorPhone": "Numéro de téléphone invalide"
  },
  "RS": {
    "name": "Field filled not right name",
    "noPhone": "You did not fill your phone",
    "errorPhone": "Invalid filled Phone"
  },
  "CO": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  },
  "PE": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  },
  "MX": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  },
  "CL": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  },
  "CE": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  },
  "EC": {
    "name": "Nombre incorrectamente rellenado",
    "noPhone": "No ha ingresado su número de teléfono",
    "errorPhone": "Número de teléfono incorrectamente llenado"
  }

};

hideInput();

selectCountry(defaultSelectCountry);

function hideInput() {

  var nameDefaultCountry = $('input[name="country"]').val();

  infoForLannding.forEach(function (entry, k) {
    $("select[name='country']").append("<option data-id='" + k + "' value='" + entry.code + "'>" + entry.nameCountry + "</option>");
    if (entry.code === nameDefaultCountry && defaultSelectCountry === '') {
      defaultSelectCountry = k;
    }
  });
  if ($('input[name="fio"]').length > 0) {
    $('<input type="hidden" name="domain" value="' + domain + '">').insertBefore('input[name="fio"]');

  } else if ($('input[name="name"]').length > 0) {
    $('<input type="hidden" name="domain" value="' + domain + '">').insertBefore('input[name="name"]');
  }
}


//var rv_name = /^[A-ZА-ЯЁ\s-]*$/i; // регулярное выражение для поля name
var rv_name = /^\D+$/i;
var rv_mask = /^\+7\(___\)(.*)/; // регулярное выражение для поля маски
var boolChangeSelect = true;

function errorLanguage(country) { // язык ошибки
  if (!(country)) {
    country = "EN";
  }
  errorName = languageError[(country)]["name"];
  errorNoPhone = languageError[(country)]["noPhone"];
  errorPhone = languageError[(country)]["errorPhone"];
}

function showError(t, text) { // css элементы для ошибки
  t.next('.error-box').show();
  t.removeClass('not_error').addClass('error');
  t.next('.error-box').html(text)
}

function notError(t) {
  t.next('.error-box').hide();
  t.addClass('not_error');
}

function addMask(t) {
  t.mask("+7(999)? 999-9999");
  t.attr("placeholder", "+7(999) 999-9999");
}

function libPhoneNumber(t) {
  t.attr("placeholder", "");
  t.intlTelInput("destroy");
  t.intlTelInput({
    allowExtensions: true,
    autoFormat: true,
    nationalMode: false,
    utilsScript: "//app.oceanleads.net/validator/v2/libphonenumber/utils.js"
  });
  $('<div class="error-box"></div>').insertAfter('input[name="phone"]');
}

function nameInputName() {
  if ($('input[name="name"]').length > 0) {
    formName = "name";
  } else if ($('input[name="fio"]').length > 0) {
    formName = "fio";
  }
}

function selectCountry(defaultSelectCountry) {
  $('select[name="country"]').children("option").attr("selected", false);
  $('select[name="country"]').children('option[value="' + defaultSelectCountry + '"]').attr("selected", true);
  $('select[name="country"]').change();
}

function changeSelect(dataId) {
  if (boolChangeSelect) {
    boolChangeSelect = false;
    $('select[name="country"]').children("option").attr("selected", false);
    $('select[name="country"]').children('option[data-id="' + dataId + '"]').attr("selected", true);
    $('select[name="country"]').change();
    boolChangeSelect = true;
  }
}

function textPriseAndLabel(dataId) {

  if ($('.priceForLandingInfoApi')) {
    $('.priceForLandingInfoApi').text(infoForLannding[dataId]['price']);
  }
  if ($('.labelForLandingInfoApi')) {
    $('.labelForLandingInfoApi').text(infoForLannding[dataId]['labelPrice']);
  }
  if ($('.priceAndLabelForLandingInfoApi')) {
    $('.priceAndLabelForLandingInfoApi').text(infoForLannding[dataId]['price'] + " " + infoForLannding[dataId]['labelPrice']);
  }
  if ($('.oldPriceForLandingInfoApi')) {
    $('.oldPriceForLandingInfoApi').text(infoForLannding[dataId]['oldPrice']);
  }
  if ($('.oldPriceAndLabelForLandingInfoApi')) {
    $('.oldPriceAndLabelForLandingInfoApi').text(infoForLannding[dataId]['oldPrice'] + " " + infoForLannding[dataId]['labelPrice']);
  }
}

$(document).ready(function () {

  $('form').on('submit', function () {
    var validate = true;
    var i = 0;
    $('.error-box:parent').each(function () {
      i = i + 1;
      if ($(this).css('display') == 'block') {
        validate = false;
      }
    });
    return validate;
  });

  nameInputName();

  var mask = '';
  $('input[name="phone"]').focus(function () {
    if (1 > mask.length) {
      mask = $(this).val().trimEnd();
    }
    return;
  });

  $('input[name="phone"]').keydown(function ( event ) {
    if (37 != event.keyCode && 39 != event.keyCode) {//left arrow, right arrow
      if (8 == event.keyCode) {//backspace
        if ($(this).caret().begin <= mask.length) {
          return false;
        }
      }
      // if (46 == event.keyCode) {//delete
      if ($(this).caret().begin <= mask.length - 1) {
        return false;
      }
      // }
    }
  });

  // var url   = window.location.href;
  var url   = window.location.origin;

  $('input[name="' + formName + '"] , input[name="phone"]').blur(function () {

    var id = $(this).attr('name');
    var val = $(this).val();
    var el = $(this);

    switch (id) {
      case formName:

        if (val.length > 2 && val != '' && rv_name.test(val)) {
          notError($(this));
        } else {
          showError($(this), errorName);
        }
        break;

      case 'phone':

        if (rv_mask.test(val)) {
          val = "";
        }
        if (val == '') {
          showError($(this), errorNoPhone);
        }

        if (val != '' && val.length >= 12) {
          notError($(this));
        } else if (val != '' && val.length <= 12) {
          showError($(this), errorPhone);
        }

        if (val.indexOf('ext') + 1) {
          showError($(this), errorPhone);
          console.log(val.indexOf('ext'));
        }

        if (-1 < url.indexOf('.de.')) {
          var de_code = "+49 ";
          var phone = val.substr(de_code.length).replace(/\s/g, '');
          if (0 === phone.indexOf('49')) {
            var de_mask_wrong = [
              '4900',
              '4901',
              '4904',
              '4905',
              '4906',
              '4907',
              '4908',
              '4909',
              '4930',
              '4937',
              '4940',
              '4949',
              '4960',
              '4969',
              '4970',
              '4978',
              '4979',
            ];

            de_mask_wrong.some(function(item) {
              if (-1 < val.indexOf(de_code + item)) {
                showError(el, errorPhone);
                return true;
              }
            });

            if (13 < phone.length) {
              showError(el, errorPhone);
            }
          }
        }
        
        break;
    }

  })

});

var country = [];
var countryEn = 0;
$(".intlTelInput").each(function () {
  var t = this;
  nameInputName()

  if ($(t).find("input[name='country']").val()) {

    textPriseAndLabel(defaultSelectCountry);

    if ($(t).find("input[name='country']").val() != "RU") {

      libPhoneNumber($(t).find(".phone"));
      country[countryEn] = $(t).find("input[name='country']").val();
      $(t).find(".phone").intlTelInput("selectCountry", country[countryEn]);
      errorLanguage($(t).find("input[name='country']").val());

    } else {

      $(t).find(".phone").intlTelInput("destroy");
      addMask($(t).find('.phone'));
      errorLanguage($(t).find("input[name='country']").val());

    }

  }
  if ($(t).find('select[name="country"] option:selected').length > 0) {

    dataIdDefault = $(t).find('select[name="country"] option:selected').data('id');

    textPriseAndLabel(dataIdDefault);

    if ($(t).find('select[name="country"] option:selected').val() != "RU") {

      libPhoneNumber($(t).find(".phone"));
      country[countryEn] = $(t).find('select[name="country"] option:selected').val();
      $(t).find(".phone").intlTelInput("selectCountry", country[countryEn]);
      errorLanguage($(t).find("select[name='country'] option:selected").val());
      notError($(t).find('input[name="' + formName + '"]'));
    } else {

      $(t).find(".phone").intlTelInput("destroy");
      addMask($(t).find('.phone'));
      errorLanguage($(t).find("select[name='country'] option:selected").val());
      notError($(t).find('input[name="' + formName + '"]'));
    }

    $(t).find("select[name='country']").change(function () {
      parentsChange = $(this).parents('.intlTelInput');
      if (parentsChange.find('select[name="country"] option:selected').val() != "RU") {
        dataId = parentsChange.find('select[name="country"] option:selected').data('id');


        country[countryEn] = $(t).find("select[name='country'] option:selected").val();
        notError($(t).find('.phone'));
        parentsChange.find('.phone').unmask();
        // parentsChange.find('.phone').attr( "placeholder","");
        libPhoneNumber(parentsChange.find(".phone"));
        parentsChange.find(".phone").intlTelInput("selectCountry", country[countryEn]);
        errorLanguage(parentsChange.find("select[name='country'] option:selected").val());
        notError(parentsChange.find('input[name="' + formName + '"]'));
        changeSelect(dataId);
        textPriseAndLabel(dataId);

      } else {
        dataId = parentsChange.find('select[name="country"] option:selected').data('id');

        parentsChange.find('.phone').unmask();
        parentsChange.find(".phone").intlTelInput("destroy");
        addMask(parentsChange.find('.phone'));
        errorLanguage(parentsChange.find("select[name='country'] option:selected").val());
        notError(parentsChange.find('input[name="' + formName + '"]'));
        changeSelect(dataId);
        textPriseAndLabel(dataId);
      }
    });
  }
  countryEn++;
});