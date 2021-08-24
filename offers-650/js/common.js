$(document).ready(function () {
 $(".reviews").owlCarousel({
    margin: 20,
    items: 1,
    dots: true,
    nav:  false,
    autoHeight: true,

    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  accordion($('.accordion'))
});

function accordion(ref$) {
  const header = ref$.find('.accordion__title')
  const body = ref$.find('.accordion__description')

  closeAll()

  header.each((i, item) => {
    $(item).on('click', () => {
      const trigger = $(item).find('.triger')
      toggleClass(trigger)
      $(body.get(i)).slideToggle(300)
    })
  })

  function closeAll() {
    body.slideUp(300)
  }

  function toggleClass(ref$) {
    return ref$.hasClass('open')
      ? ref$.removeClass('open')
      : ref$.addClass('open')
  }
}
$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 600);
  e.preventDefault();
});