(function($) {

  "use strict";


  // Mobile Menu Activeion Js
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
  var hash = window.location.hash.substr(1);
  if ((curpage === "" || curpage === "/" || curpage === "admin") && hash === "") {} else {
      $(".header-navigation-area li").each(function() {
          $(this).removeClass("active");
      });
      if (hash != "")
          $(".header-navigation-area li a[href='" + hash + "']").parents("li").addClass("active");
      else
          $(".header-navigation-area li a[href='" + curpage + "']").parents("li").addClass("active");
  }

  // Header Sticky Menu
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on('scroll', function() {
      var scroll = windows.scrollTop();
      if (scroll < 245) {
          stick.removeClass("sticky");
      } else {
          stick.addClass("sticky");
      }
  });

    // Annual & Month Price Change
    $('.clickme a.nav-link').on('click', function (e) {
        e.preventDefault();
        var tagid = $(this).data('tag');
        
        $('.clickme a.nav-link').removeClass('activelink');
        $('.clickme').find("a.nav-link[data-tag='"+tagid+"']").addClass('activelink');
          
        $('.list').removeClass('active').addClass('hide');
        $('.list.' + tagid).addClass('active').removeClass('hide');
    });


  // Swiper Default Slider Js
  var mainlSlider = new Swiper('.default-slider-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 700,
      spaceBetween: 0,
      effect: 'fade',
      autoHeight: true, //enable auto height
      fadeEffect: {
          crossFade: true,
      },
      navigation: {
          nextEl: '.default-slider-container .swiper-btn-next',
          prevEl: '.default-slider-container .swiper-btn-prev',
      },
  });


  // Brand Logo Slider Js
  var swiper = new Swiper('.brand-logo-slider-container', {
      slidesPerGroup: 1,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false
      },
      loop: true,
      speed: 500,
      spaceBetween: 20,
      navigation: {
          nextEl: '.brand-swiper-btn-next',
          prevEl: '.brand-swiper-btn-prev',
      },
      breakpoints: {
          1200: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          576: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          480: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
      }
  });

  // Fancybox Js
  $('.image-popup').fancybox();
  $('.video-popup').fancybox();


  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });



  // scrollToTop Js
  function scrollToTop() {
      var $scrollUp = $('#scroll-to-top'),
          $lastScrollTop = 0,
          $window = $(window);
      $window.on('scroll', function() {
          var st = $(this).scrollTop();
          if (st > $lastScrollTop) {
              $scrollUp.removeClass('show');
          } else {
              if ($window.scrollTop() > 120) {
                  $scrollUp.addClass('show');
              } else {
                  $scrollUp.removeClass('show');
              }
          }
          $lastScrollTop = st;
      });
      $scrollUp.on('click', function(evt) {
          $('html, body').animate({
              scrollTop: 0
          }, 50);
          evt.preventDefault();
      });
  }
  scrollToTop();


  // Timer Tab Panel  Js
  $("#tabs").timerTabPanel({
      startTab: 1,
      timeInterval: 5000
  });

  $("#tabs2").timerTabPanel({
      startTab: 1,
      timeInterval: 5000
  });


  // Table Top Pinned Js 
  $('.sticky-smart-3').smartSticky({
      show: {
          fixed: 'toggle'
      }
  });

})(window.jQuery);