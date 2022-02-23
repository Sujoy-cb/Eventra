/*---------Preloader part--------*/ 
setTimeout(function(){
  $("#preloader").fadeOut()
},2000)



/*---------Nav bar part--------*/ 
$(window).on('scroll', function(){
  var scrollamount = $(window).scrollTop()
  if (scrollamount>100){
    $(".nav-bar").addClass("fixedmenu")
  }else{
    $(".nav-bar").removeClass("fixedmenu")
  }
})

// mobile view//

$('.bar-button').on('click', function(){
  $('.nav-overlay').css('left', '0px')
})

$('.cross').on('click', function(){
  $('.nav-overlay').css('left', '-991px')
})


// fixed menu mobile view //


$(window).on('scroll', function(){
  var scrollamount = $(window).scrollTop()
  if (scrollamount>100){
    $(".mobile-nav").addClass("fixedmenu")
  }else{
    $(".mobile-nav").removeClass("fixedmenu")
  }
})


/*---------Banner slider part--------*/
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    fade:true,
    speed: 1000,
    nextArrow: '<span><i class="fas fa-chevron-right nxt"></i></span>',
    prevArrow: '<span><i class="fas fa-chevron-left prv"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  /*---------Counter part---------*/
  
  $(function(){
      loopcounter('myCountdown');
    });


/*----------venubox---------*/

$(document).ready(function(){
  $('.venobox').venobox(); 
});
    

/*---------Another Counter part---------*/

let visibilityId = ['#counters_2'];

let counterClass = '.counter';

let defaultSpeed = 3000;



/*---------Speaker slider part--------*/

$('.text-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: false,
  speed: 300,
  vertical: true,
  asNavFor: '.img-slider',
  nextArrow: '<span><i class="fas fa-chevron-right nxt"></i></span>',
  prevArrow: '<span><i class="fas fa-chevron-left prv"></i></span>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.img-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: false,
  speed: 300,
  centerMode: true,
  centerPadding: '0',
  asNavFor: '.text-slider',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/* ----------Nice scroll-----------*/ 

$(".do-nicescroll4").niceScroll(".wrap"); 



/* ----------Gallery part-----------*/ 


$('.gallery-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 1000,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/* ----------Review part-----------*/ 


$('.review-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay: true,
  speed: 300,
  nextArrow: '<span><i class="fas fa-chevron-right nxt"></i></span>',
  prevArrow: '<span><i class="fas fa-chevron-left prv"></i></span>',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



/*-------Go top button part----------*/ 

$(".go-top").on('click', function(){
  $('html,body').animate({
      scrollTop: 0,
  },500)
})

/*----------Go top button-invisible-----------*/
$(window).on('scroll', function(){
  var scrollPos = $(window).scrollTop();

  if (scrollPos > 100) {
    $(".go-top").slideDown(100);
  }else{
    $(".go-top").slideUp(100);
  }
});