$(document).ready(function(){
  'use strict';
  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Accordion =====//
  $('#acordn .acrdn-cnt').hide();
  $('#acordn h4:first').addClass('active').next().slideDown(500).parent().addClass("activate");
  $('#acordn h4').on("click", function() {
    if ($(this).next().is(':hidden')) {
      $('#acordn h4').removeClass('active').next().slideUp(500).parent().removeClass("activate");
      $(this).toggleClass('active').next().slideDown(500).parent().toggleClass("activate");
    }
  });

  //===== Sticky Header =====//
  var menu_height = $('header').innerHeight();
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= menu_height) {
        $('.stck').addClass('sticky');
      } else {
        $('.stck').removeClass('sticky');
      }
  });
  if ($('header').hasClass('stck')) {
    $('main').css({'padding-top': menu_height});
  }

  //===== Scroll Up Bar =====//
  if ($.isFunction($.fn.scrollupbar)) {
    $('header').scrollupbar();
  }

  //===== Scroll Function =====//
  $(function() {
    $('nav > ul > li > a').on('click',function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
      return false;
    });
  });

  //===== LightBox =====//
  if ($.isFunction($.fn.poptrox)) {
    var foo = $('.lightbox');
    foo.poptrox({usePopupCaption: true, usePopupNav: true});
  }

  //===== Select 2 =====//
  if ($.isFunction($.fn.select2)) {
    $('select').select2({});
  }

  //===== Custom Scrollbar =====//
  if ($.isFunction($.fn.mCustomScrollbar)) {
    $('.custom-scrollbar').mCustomScrollbar({theme:"light-thick"});
  }

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {
    //=== Apps Screenshots Carousel ===//
    $('.app-scrn-caro').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 4,
      dots: false,
      slideSpeed: 2000,
      nav: true,
      navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
      margin: 0,
      responsive: {
        0: {items: 1,nav: false},
        480: {items: 2,nav: false},
        768: {items: 3,nav: false},
        1200: {items: 4}
      }
    });

    //=== Testimonials Carousel ===//
    $('.testi-caro-innr').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 1,
      dots: true,
      slideSpeed: 2000,
      nav: false,
      margin: 0,
      animateIn:"fadeIn",
      animateOut:"fadeOut"
    });
   }

  //===== Google Map =====//
  function initialize() {
    var myLatlng = new google.maps.LatLng(51.5015588, -0.1276913);
    var mapOptions = {
      zoom: 14,
      disableDefaultUI: true,
      scrollwheel: false,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('gmp'), mapOptions);

      // var image = 'images/icon.png';
      var myLatLng = new google.maps.LatLng(51.5015588, -0.1276913);
      var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
          // icon: image
        });

    }
    google.maps.event.addDomListener(window, 'load', initialize);

  });
