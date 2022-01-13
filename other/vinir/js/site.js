$(document).ready(function () {
  var owlCarouselConfig = {
    navigation: false,
    nav:true,
    center: true,
    slideSpeed: 300,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1
  };
  $(".smile-step-row-mobile #owl-demo").owlCarousel(owlCarouselConfig);
  $("#smile-style #owl-demo").owlCarousel(owlCarouselConfig);
  $("#smile-shades #owl-demo").owlCarousel(owlCarouselConfig);
  $(".why-instasmile #owl-demo").owlCarousel(owlCarouselConfig);
  $(".client-testimonial #owl-demo").owlCarousel({
    navigation: false,
    center: true,
    slideSpeed: 300,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  });
  $(".straighter-sec-7-story #owl-demo").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      },
      1100: {
        items: 2
      }
    }
  });
  $(".order-client-slider #owl-demo").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    loop: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1100: {
        items: 2
      }
    }
  });
});

function UpdateLabel(label) {
  $(label).toggleClass("active");
}

function SetActive(className, elementToSet) {
  if (className == 'sa-datails') {
    document.getElementById("spanProductValidation").innerHTML = "";
  }
  if (className == 'sa-shade-details') {
    document.getElementById("spanShadeValidation").innerHTML = "";
  }
  $('.' + className).removeClass("active");
  $(elementToSet).addClass("active");
}

function ToggleArchSelected(arch, elementToSet) {
  SetActive('teeth-type-details', elementToSet);
  $('#' + 'upper-teeth-missing-section').addClass("d-none");
  $('#' + 'lower-teeth-missing-section').addClass("d-none");
  if (arch === 'dual') {
    $('#' + 'upper-teeth-missing-section').removeClass("d-none");
    $('#' + 'lower-teeth-missing-section').removeClass("d-none");
  } else {
    $('#' + arch + '-teeth-missing-section').removeClass("d-none");
  }
}

function ToggleTeethMissing(arch, isMissing, elementToSet) {
  $('#errorMsg').text("");
  SetActive('teeth-is-' + arch + '-missing', elementToSet);
  if (arch == 'upper') {
    document.getElementById("upperValidation").innerHTML = "";
  }
  if (arch == 'lower') {
    document.getElementById("lowerValidation").innerHTML = "";
  }
  if (isMissing) {
    $('#' + arch + '-missing-teeth').removeClass("d-none");
  } else {
    $('#' + arch + '-missing-teeth').addClass("d-none");
    $('input[id^=tooth-' + arch + '-]').prop("checked", false);
    $('label[for^=tooth-' + arch + '-]').removeClass("active");
  }
}

function ToggleBillingAddress() {
  $('.form-shipping-details').toggleClass("d-none");
}

function UpdatePromoCode(element) {
  ToggleLoading();
  if (promoCode === '') {
    ToggleLoading();
    return;
  }
  $(element).prop("disabled", true);
  $(element).removeAttr("onclick");
  $("#promo_code_input").prop("disabled", true);
  $("#promo-error-message").hide();
  var promoCode = $("#promo_code_input").val();
  var container = $(".checkout-second-clmn");
  $.get("/Checkout/OrderPromoComponent", {
    promoCode
  }).done(function (data) {
    container.html(data);
    ToggleLoading();
  }).fail(function (err) {
    $(".promo-error-message").html(err.responseText).show();
    $("#promo_code_input").prop("disabled", false);
    $(element).attr("onclick", "UpdatePromoCode(this)");
    $(element).prop("disabled", false);
    ToggleLoading();
  });
}

function RemovePromoCode(element) {
  ToggleLoading();
  $(element).removeAttr("onclick");
  $(element).prop("disabled", true);
  $("#promo-error-message").hide();
  var container = $(".checkout-second-clmn");
  $.get("/Checkout/OrderPromoComponent", {}).done(function (data) {
    container.html(data);
    ToggleLoading();
  }).fail(function (err) {
    $(".promo-error-message").html(err.responseText).show();
    $(element).attr("onclick", "RemovePromoCode(this)");
    $(element).prop("disabled", false);
    ToggleLoading();
  });
}

function TogglePaymentTypeSelected(paymentType, elementToSet) {
  SetActive('payment-option-details', elementToSet);
  if (paymentType === 'stripe') {
    $('.payment-partner-row').addClass("d-none");
    $('#partial_h').addClass("d-none");
    $('#card_details_h').removeClass("d-none");
    $('#form-card-details').removeClass("d-none");
    $('.payment-partner-details').removeClass("active");
    $('html, body').animate({
      scrollTop: $('#card_details_h').offset().top - 20
    }, 'slow');
    TogglePayNowButtons();
  } else {
    $('#card_details_h').addClass("d-none");
    $('#form-card-details').addClass("d-none");
    $('.payment-partner-row').removeClass("d-none");
    $('#partial_h').removeClass("d-none");
    $('html, body').animate({
      scrollTop: $('#partial_h').offset().top - 20
    }, 'slow');
    TogglePayNowButtons(true);
  }
}

function AddToOrder(addOn) {
  $('.btn-add-order').addClass("disabled");
  TogglePayNowButtons(true);
  ToggleLoading();
  $.ajax({
    type: "POST",
    url: "/Checkout/OrderAddOn",
    data: {
      addOn: addOn
    },
    timeout: 10000,
    error: function (jqXHR, textStatus, errorThrown) {
      if (textStatus === "timeout") {
        ReloadOrderUpgradeComponent();
        ReloadOrderAddOnsComponent("Timed out connecting to server, try again later");
        ReloadOrderSummaryComponent();
        TogglePayNowButtons();
        ToggleLoading();
      }
    },
    success: function (data) {
      var errorMessage;
      if (!data.isSuccess) {
        errorMessage = data.errorMessage
      }
      ReloadOrderUpgradeComponent();
      ReloadOrderAddOnsComponent();
      ReloadOrderSummaryComponent();
      TogglePayNowButtons();
      ToggleLoading();
    }
  });
}

function TogglePayNowButtons(toDisable = false) {
  var isStripeValid = (isCardValid && isCvvValid && isExpiryValid);
  if ($('.t_c').is(':checked') && toDisable === false && ($('.payment-partner-details').hasClass('active') || isStripeValid)) {
    $('.pay-now-btn').removeClass("pay-now-disable disabled");
    $('.pay-now-btn').addClass("btn-primary");
    $('.pay-now-btn').prop("disabled", false);
  } else {
    $('.pay-now-btn').removeClass("btn-primary");
    $('.pay-now-btn').addClass("disabled pay-now-disable");
    $('.pay-now-btn').prop("disabled", true);
  }
  if ($('.paymentBlock-partial').hasClass('active')) {
    $('.payBtnText').html('Proceed to payment');
    $('.forwardTxt').html('You\'ll be forwarded to the payment partner site to complete your payment. All transactions are secure and encrypted.');
  } else {
    $('.payBtnText').html('Pay now');
    $('.forwardTxt').html('All transactions are secure and encrypted.');
  }
}
async function ReloadOrderUpgradeComponent(errorMessage = '') {
  var container = $("#orderUpgrade");
  $.get("/Checkout/OrderUpgradeComponent", {
    errorMessage: errorMessage
  }, function (data) {
    container.html(data);
  });
}
async function ReloadOrderPaymentOptions() {
  var container = $("#orderPaymentOptions");
  $.get("/checkout/payment-options", function (data) {
    container.html(data);
  });
}
async function ReloadOrderAddOnsComponent(errorMessage = '') {
  var container = $("#orderAddOns");
  $.get("/Checkout/OrderAddOnsComponent", {
    errorMessage: errorMessage
  }, function (data) {
    container.html(data);
  });
}
async function ReloadOrderSummaryComponent() {
  var container = $("#orderSummary");
  $.get("/Checkout/Order-Summary", function (data) {
    container.html(data);
  });
}

function DisableAutoAddressInput() {
  $('#shipping_address_search').prop("disabled", true);
  $('#billing_address_search').prop("disabled", true);
  $('#shipping_address_search').attr('placeholder', 'Please manually enter address');
  $('#billing_address_search').attr('placeholder', 'Please manually enter address');
  $('#billing_street_address').attr('readonly', false);
  $('#billing_city').attr('readonly', false);
  $('#billing_postcode').attr('readonly', false);
  $('#billing_county').attr('readonly', false);
  $('#shipping_street_address').attr('readonly', false);
  $('#shipping_city').attr('readonly', false);
  $('#shipping_postcode').attr('readonly', false);
  $('#shipping_county').attr('readonly', false);
}

function ToggleInformationForm() {
  $('#UpdateForm p').toggleClass('d-none');
  $('.EditButton').toggleClass('d-none');
  $('#UpdateForm').find(':input').toggleClass('d-none');
  $('.CancelButton').toggleClass('d-none');
  $('#SubmitButton').toggleClass('d-none');
}

function FileUploadUpdateList() {
  var input = document.getElementById('fileInput');
  var outputs = document.getElementsByClassName('fileList');
  var children = "";
  for (var i = 0; i < input.files.length; ++i) {
    children += '<li>' + input.files.item(i).name + '<i class="fas fa-times pl-2" onclick="FileUploadRemoveImage(' + i + ');"></i></li>';
  }
  for (let output of outputs) {
    output.innerHTML = '<ul>' + children + '</ul>';
  }
}

function FileUploadRemoveImage(index) {
  var dt = new DataTransfer();
  var fileInput = document.getElementById("fileInput");
  var files = fileInput.files;
  for (var i = 0; i < files.length; i++) {
    if (i !== index) {
      var file = files[i];
      dt.items.add(file);
    }
  }
  fileInput.files = dt.files;
  FileUploadUpdateList();
}

function ReviewUpdate(elementId, review) {
  if (review === 'passed') {
    $(elementId).value = "";
    $(elementId).css("opacity", 0.5);
    $(elementId).prop("disabled", true);
  } else {
    $(elementId).css("opacity", 1);
    $(elementId).prop("disabled", false);
  }
}

function CheckedImpression(id) {
  $(id).prop('disabled', function (_, val) {
    return !val;
  });
}

function ToggleLoading() {
  $('.overlay').toggleClass("d-none");
}