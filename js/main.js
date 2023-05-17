
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:2
            }
        }
    })




    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
              Counter: $(this).data('value')
          }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {                      
              $(this).text(this.Counter.toFixed(0));
          }
      });

      $('.navbar-nav li a').click(function (){
        $('html,body').animate({
            scrollTop:$('#'+$(this).data('value')).offset().top
        },1000);
    });
  });